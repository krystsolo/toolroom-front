import {Component, OnInit} from '@angular/core';
import {BuyOrderService} from '../../../services/buy-order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BuyOrder} from '../../../models/buy-order';
import {EmployeeShort} from '../../../models/employee-short';
import {EmployeeService} from '../../../services/employee.service';
import {EmployeeShortViewComponent} from '../../employee/shared/employee-short-view-dialog/employee-short-view.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-buy-order-view',
    templateUrl: './buy-order-view.component.html',
    styleUrls: ['./buy-order-view.component.css']
})
export class BuyOrderViewComponent implements OnInit {

    buyOrder: BuyOrder = {
        orderCode: '', buyOrderTools: [], warehousemanId: null, description: '', addTimestamp: null, editTimestamp: null
    };
    warehouseman: EmployeeShort;

    constructor(private buyOrderService: BuyOrderService,
                private employeeService: EmployeeService,
                private router: Router,
                private route: ActivatedRoute,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.buyOrderService.getBuyOrder(this.getBuyOrderIdFromUrl()).subscribe(
            res => {
                this.buyOrder = res;
                this.employeeService.getEmployeeShort(this.buyOrder.warehousemanId).subscribe(
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

    private getBuyOrderIdFromUrl(): number {
        return Number(this.route.snapshot.paramMap.get('id'));
    }

    editBuyOrder() {
        this.router.navigate(['/buyorders/' + this.buyOrder.id + '/update']);
    }

    deleteBuyOrder() {
        this.buyOrderService.deleteBuyOrder(this.buyOrder.id).subscribe(
            res => {
                console.log(res);
                this.router.navigate(['/buyorders/']);
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
