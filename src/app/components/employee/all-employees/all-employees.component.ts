import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../services/employee.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {EmployeeShort} from '../../../models/employee-short';
import {TokenStorage} from '../../../services/auth/token-storage';
import {Role} from '../../../models/role';
import {EmployeeShortViewComponent} from '../shared/employee-short-view-dialog/employee-short-view.component';


@Component({
    selector: 'app-all-employees',
    templateUrl: './all-employees.component.html',
    styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

    private employees: EmployeeShort[];
    displayedColumns = ['id', 'image', 'userName', 'firstName', 'surName', 'phoneNumber',
        'email'];
    dataSource: MatTableDataSource<EmployeeShort>;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

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
                this.dataSource = new MatTableDataSource(this.employees);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.isDataLoaded = true;
            },
            error => {
                console.log(error);
            }
        );
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    onRowClicked(employee: Employee) {

        if (TokenStorage.hasUserRole(Role.ADMIN)) {
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

