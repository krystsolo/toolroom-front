import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../services/employee.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {EmployeeShort} from '../../../models/employee-short';
import {TokenStorage} from '../../../services/auth/token-storage';
import {RoleEnum} from '../../../models/roleEnum';
import {EmployeeShortViewComponent} from '../shared/employee-short-view-dialog/employee-short-view.component';


@Component({
    selector: 'app-all-employees',
    templateUrl: './all-employees.component.html',
    styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

    employees: EmployeeShort[];
    isDataLoaded: boolean;

    constructor(
        public dialog: MatDialog,
        private employeeService: EmployeeService,
        private router: Router) {
    }

    ngOnInit() {
        this.employeeService.getEmployees().subscribe(
            res => {
                console.log(res);
                this.employees = res;
                this.isDataLoaded = true;
            },
            error => {
                console.log(error);
            }
        );
    }

    onRowClicked(employee: Employee) {

        if (TokenStorage.hasUserRole(RoleEnum.ADMIN)) {
            this.router.navigate(['/employees/' + employee.id]);
        } else {
            this.dialog.open(EmployeeShortViewComponent, {
                data: {employee: employee}, height: '700px',
                width: '800px'
            });
        }

        console.log('Employee: ' + employee);
    }
}

