import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

    newEmployee: Employee = {firstName: '', surName: '', password: '', userName: '', roles: [],
        isActive: true, phoneNumber: null, email: '', image: '', workingGroup: ''};

  constructor(private employeeService: EmployeeService, private router: Router) { }

  onSubmit() {
      this.employeeService.addEmployee(this.newEmployee).subscribe(
          res => {
              this.newEmployee = {firstName: '', surName: '', password: '', userName: '', roles: [],
                  isActive: true, phoneNumber: null, email: '', image: '', workingGroup: ''};
              this.router.navigate(['/employees/' + res.id]);
          },
          error => {
                console.log(error);
          }
      );
  }

  ngOnInit() {
  }

}
