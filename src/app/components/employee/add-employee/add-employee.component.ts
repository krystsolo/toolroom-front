import {Component, Output} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

    @Output()
    newEmployee: Employee = this.fillEmployeeFieldsWithDefaultValues();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  onSubmit() {
      this.employeeService.addEmployee(this.newEmployee).subscribe(
          res => {
              this.newEmployee = this.fillEmployeeFieldsWithDefaultValues();
              this.router.navigate(['/employees/' + res.userName]);
          },
          error => {
                console.log(error);
          }
      );
  }

    fillEmployeeFieldsWithDefaultValues(): Employee {
      return {firstName: '', surName: '', password: '', userName: '', roles: [],
          isActive: true, phoneNumber: null, email: '', image: '', workingGroup: ''};
    }
}
