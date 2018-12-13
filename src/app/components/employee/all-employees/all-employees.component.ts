import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../services/employee.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
    selector: 'app-all-employees',
    templateUrl: './all-employees.component.html',
    styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit, AfterViewInit {

    private employees: Employee[];
    displayedColumns = ['id', 'image', 'userName', 'firstName', 'surName', 'phoneNumber',
        'email', 'isActive'];
     dataSource: MatTableDataSource<Employee>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private employeeService: EmployeeService) {
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.employeeService.getEmployees().subscribe(
            res => {
                console.log(res);
                this.employees = res;
                this.dataSource = new MatTableDataSource(this.employees);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
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
        console.log('Employee: ' + employee);
    }
}

