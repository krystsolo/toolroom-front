import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    baseUrl = 'http://localhost:8080/employees';

    constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.baseUrl);
  }

  addEmployee(employee: Employee) {
        return this.http.post<Employee>(this.baseUrl, employee);
  }

  saveEmployee(id: number, employee: Employee) {
        return this.http.put(this.baseUrl + id, employee);
  }

  deleteEmployee(id: number) {
        this.http.delete(this.baseUrl + id);
  }
}
