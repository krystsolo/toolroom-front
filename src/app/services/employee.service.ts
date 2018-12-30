import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    baseUrl = environment.baseUrl + 'employees';

    constructor(private http: HttpClient) {
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.baseUrl);
    }

    getEmployee(username: string): Observable<Employee> {
        const url = this.baseUrl + '/' + username;
        return this.http.get<Employee>(url);
    }

    addEmployee(employee: Employee) {
        return this.http.post<Employee>(this.baseUrl, employee);
    }

    saveEmployee(username: string, employee: Employee) {
        const url = this.baseUrl + '/' + username;
        return this.http.put<Employee>(url, employee);
    }

    deleteEmployee(id: number) {
        const url = this.baseUrl + '/' + id;
        return this.http.delete<Employee>(url);
    }
}
