import {Component, OnInit, Output} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

    @Output()
    employee: Employee = {
        firstName: '', surName: '', password: '', userName: '', roles: [],
        isActive: true, phoneNumber: null, email: '', image: '', workingGroup: ''
    };

    constructor(private employeeService: EmployeeService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    onSubmit() {
        this.employeeService.saveEmployee(this.getUsernameFromUrl(), this.employee)
            .subscribe(
                res => {
                    this.router.navigate(['/employees/' + res.userName]);
                },
                error => {
                    console.log(error);
                }
            );
    }

    ngOnInit() {
        this.employeeService.getEmployee(
            this.getUsernameFromUrl()
        )
            .subscribe(
                res => {
                    this.employee = res;
                },
                error => {
                    console.log(error);
                }
            );
    }

    private getUsernameFromUrl() {
        return this.route.snapshot.paramMap.get('userName');
    }

    back() {
        this.router.navigate([/employees/ + this.getUsernameFromUrl()]);
    }
}
