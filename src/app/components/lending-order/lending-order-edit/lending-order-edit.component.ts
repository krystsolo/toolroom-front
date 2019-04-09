import { Component, OnInit } from '@angular/core';
import {BuyOrder} from '../../../models/buy-order';
import {BuyOrderService} from '../../../services/buy-order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LendingOrder} from '../../../models/lending-order';
import {LendingOrderService} from '../../../services/lending-order.service';
import {EmployeeService} from '../../../services/employee.service';
import {EmployeeShort} from '../../../models/employee-short';

@Component({
  selector: 'app-lending-order-edit',
  templateUrl: './lending-order-edit.component.html',
  styleUrls: ['./lending-order-edit.component.css']
})
export class LendingOrderEditComponent implements OnInit {

    lendingOrder: LendingOrder = {
        orderNumber: '', lendingOrderTools: [], warehousemanId: null, description: '', workerId: null
    };
    worker: EmployeeShort;
    isDataLoaded: boolean;

    constructor(private lendingOrderService: LendingOrderService,
                private employeeService: EmployeeService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.lendingOrderService.getLendingOrder(this.getIdFromUrl()).subscribe(
            res => {
                this.lendingOrder = res;
                if (this.lendingOrder.workerId != null) {
                    this.employeeService.getEmployeeShort(this.lendingOrder.workerId).subscribe(
                        worker => {
                            this.worker = worker;
                            this.isDataLoaded = true;
                        },
                        error => console.log(error)
                    );
                } else {
                    this.isDataLoaded = true;
                }
            }, error => {
                console.log(error);
            }
        );
    }

    onSubmit(order: LendingOrder) {
        this.lendingOrderService.saveLendingOrder(this.getIdFromUrl(), order).subscribe(
            res => this.router.navigate(['/lendingorders/' + res.id]),
            error => {
                console.log(error);
            }
        );
    }

    private getIdFromUrl() {
        return Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    }
}
