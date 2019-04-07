import { Component, OnInit } from '@angular/core';
import {EmployeeShort} from '../../../models/employee-short';
import {BuyOrderService} from '../../../services/buy-order.service';
import {EmployeeService} from '../../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {EmployeeShortViewComponent} from '../../employee/shared/employee-short-view-dialog/employee-short-view.component';
import {DestructionOrder} from '../../../models/destruction-order';
import {DestructionOrderService} from '../../../services/destruction-order.service';

@Component({
  selector: 'app-view-destruction-order',
  templateUrl: './view-destruction-order.component.html',
  styleUrls: ['./view-destruction-order.component.css']
})
export class ViewDestructionOrderComponent implements OnInit {

    destructionOrder: DestructionOrder = {
        orderCode: '', destructionOrderTools: [], warehousemanId: null, description: '', addTimestamp: null, editTimestamp: null
    };
    warehouseman: EmployeeShort;

    constructor(private destructionOrderService: DestructionOrderService,
                private employeeService: EmployeeService,
                private router: Router,
                private route: ActivatedRoute,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.destructionOrderService.getDestructionOrder(this.getDestructionOrderIdFromUrl()).subscribe(
            res => {
                this.destructionOrder = res;
                this.employeeService.getEmployeeShort(this.destructionOrder.warehousemanId).subscribe(
                    result => {
                        this.warehouseman = result;
                    },
                    error => {
                        console.log(error);
                    }
                );
            },
            error => {
                console.log(error);
            }
        );

    }

    private getDestructionOrderIdFromUrl(): number {
        return Number(this.route.snapshot.paramMap.get('id'));
    }

    editDestructionOrder() {
        this.router.navigate(['/destructionorders/' + this.destructionOrder.id + '/update']);
    }

    deleteDestructionOrder() {
        this.destructionOrderService.deleteDestructionOrder(this.destructionOrder.id).subscribe(
            res => {
                console.log(res);
                this.router.navigate(['/destructionorders/']);
            },
            err => {
                console.log(err);
            }
        );
    }

    showWarehousemanDialog() {
        this.dialog.open(EmployeeShortViewComponent, {data: {employee: this.warehouseman}, height: '700px',
            width: '800px'});
    }

}
