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

    constructor(private employeeService: EmployeeService, private router: Router) {
    }

    onSubmit(event) {
        this.employeeService.addEmployee(event.emp).subscribe(
            res => {
                if (event.file != null) {
                    this.uploadImage(res.id, event.file);
                }
                this.newEmployee = this.fillEmployeeFieldsWithDefaultValues();
                this.router.navigate(['/employees/' + res.id]);
            },
            error => {
                console.log(error);
            }
        );
    }

    private uploadImage(id: number, file: File): void {
        this.employeeService.uploadImage(id, file).subscribe(
            res => {
                console.log('Image added');
            }, error => {
                console.log('Error with add image');
            }
        );
    }

    fillEmployeeFieldsWithDefaultValues(): Employee {
        return {
            firstName: '', surName: '', password: '', userName: '', roles: [],
            isActive: true, phoneNumber: null, email: '', image: '', workingGroup: ''
        };
    }
}
