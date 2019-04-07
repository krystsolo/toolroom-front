import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Tool} from '../../../../models/tool';
import {Router} from '@angular/router';
import {EmployeeShort} from '../../../../models/employee-short';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {

    displayedColumns = ['id', 'image', 'userName', 'firstName', 'surName', 'phoneNumber',
        'email'];
    dataSource: MatTableDataSource<EmployeeShort>;

    @Input() employees: EmployeeShort[];
    @Output() employeeClicked = new EventEmitter<EmployeeShort>();

    @Input() width = 'container';
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.employees);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    onRowClicked(employee: EmployeeShort) {
        this.employeeClicked.emit(employee);
    }

}
