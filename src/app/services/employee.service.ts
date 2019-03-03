import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Employee} from '../models/employee';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    baseUrl = environment.baseUrl + 'employees';

    constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.baseUrl);
    }

    getEmployee(id: number): Observable<Employee> {
        const url = this.baseUrl + '/' + id;
        return this.http.get<Employee>(url);
    }

    addEmployee(employee: Employee) {
        return this.http.post<Employee>(this.baseUrl, employee);
    }

    saveEmployee(id: number, employee: Employee) {
        const url = this.baseUrl + '/' + id;
        return this.http.put<Employee>(url, employee);
    }

    deleteEmployee(id: number) {
        const url = this.baseUrl + '/' + id;
        return this.http.delete<Employee>(url);
    }

    uploadImage(id: number, file: File) {
        const formData: FormData = new FormData();
        formData.append('file', file, file.name);
        // let req = new HttpRequest('POST', this.baseUrl + '/' + id + '/image', formData);
        // req = req.clone({headers: req.headers.set('Content-Type', 'multipart/form-data')});
        // return this.http.request(req);
        return this.http.post(this.baseUrl + '/' + id + '/image', formData);
    }

    getImage(id: number) {
        return this.http.get(this.baseUrl + '/' + id + '/image', {responseType: 'blob'})
            .pipe(
                map(blob => {
                    const urlCreator = window.URL;
                    return this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
                }));
    }
}
