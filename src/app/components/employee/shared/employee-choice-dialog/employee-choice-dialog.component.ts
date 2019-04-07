import {Component, Inject, OnInit} from '@angular/core';
import {Tool} from '../../../../models/tool';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeeShort} from '../../../../models/employee-short';

@Component({
  selector: 'app-employee-choice-dialog',
  templateUrl: './employee-choice-dialog.component.html',
  styleUrls: ['./employee-choice-dialog.component.css']
})
export class EmployeeChoiceDialogComponent implements OnInit {

    employees: EmployeeShort[];

    constructor(
        public dialogRef: MatDialogRef<EmployeeChoiceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }


    ngOnInit() {
        this.employees = this.data.employees;
    }

    onRowClicked(employee: EmployeeShort) {
        this.dialogRef.close(employee);
    }

}
