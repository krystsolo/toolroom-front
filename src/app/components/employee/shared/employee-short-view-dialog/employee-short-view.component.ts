import {Component, Inject, Input, OnInit} from '@angular/core';
import {EmployeeService} from '../../../../services/employee.service';
import {EmployeeShort} from '../../../../models/employee-short';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-employee-short-view',
    templateUrl: './employee-short-view.component.html',
    styleUrls: ['./employee-short-view.component.css']
})
export class EmployeeShortViewComponent implements OnInit {

    // employee: EmployeeShort;
    constructor(
        @Inject(MAT_DIALOG_DATA) public employee: EmployeeShort) {
    }

    ngOnInit() {
        // this.employee = this.data;
    }

}
