import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import {Employee} from '../../../models/employee';
import {ActivatedRoute, convertToParamMap, ParamMap, Route, Router} from '@angular/router';
import {Role} from '../../../models/role';


@Component({
    selector: 'app-employee-view',
    templateUrl: './employee-view.component.html',
    styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

    employee: Employee = {
        firstName: '', surName: '', password: '', userName: '', roles: [],
        isActive: true, phoneNumber: null, email: '', image: '', workingGroup: ''
    };

    constructor(private employeeService: EmployeeService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.employeeService.getEmployee(this.getEmployeeIdFromUrl())
            .subscribe(
                res => {
                    this.employee = res;
                },
                error => {
                    console.log(error);
                }
            );
    }

    deleteEmployee() {
        this.employeeService.deleteEmployee(this.employee.id).subscribe(
            result => {
                location.reload();
            },
            error => {
                console.log(error);
            }
        );
    }

    editEmployee() {
        this.router.navigate(['/employees/' + this.employee.id + '/update']);
    }

    private getEmployeeIdFromUrl(): number {
        return Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    }
}
