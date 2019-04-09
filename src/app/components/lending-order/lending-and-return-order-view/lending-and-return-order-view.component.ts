import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material';
import {EmployeeShortViewComponent} from '../../employee/shared/employee-short-view-dialog/employee-short-view.component';
import {EmployeeShort} from '../../../models/employee-short';

@Component({
  selector: 'app-lending-and-return-order-view',
  templateUrl: './lending-and-return-order-view.component.html',
  styleUrls: ['./lending-and-return-order-view.component.css']
})
export class LendingAndReturnOrderViewComponent implements OnInit {

    id: number = null;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

    showWarehousemanDialog(employee: EmployeeShort) {
        this.dialog.open(EmployeeShortViewComponent, {data: {employee: employee}, height: '700px',
            width: '800px'});
    }

    setReturnId(id: number) {
        this.id = id;
    }
}
