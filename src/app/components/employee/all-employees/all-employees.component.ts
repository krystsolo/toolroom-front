import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../services/employee.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';


@Component({
    selector: 'app-all-employees',
    templateUrl: './all-employees.component.html',
    styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

    private employees: Employee[];
    displayedColumns = ['id', 'image', 'userName', 'firstName', 'surName', 'phoneNumber',
        'email'];
    dataSource: MatTableDataSource<Employee>;
    isDataLoaded: boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
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
        // if user.roles.contain === ADMIN then employee-details
        // else show simple employee info
        this.router.navigate(['/employees/' + employee.id]);
        console.log('Employee: ' + employee);
    }
}

