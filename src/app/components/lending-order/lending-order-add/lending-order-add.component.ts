import { Component, OnInit } from '@angular/core';
import {BuyOrder} from '../../../models/buy-order';
import {BuyOrderService} from '../../../services/buy-order.service';
import {Router} from '@angular/router';
import {LendingOrder} from '../../../models/lending-order';
import {LendingOrderService} from '../../../services/lending-order.service';

@Component({
  selector: 'app-lending-order-add',
  templateUrl: './lending-order-add.component.html',
  styleUrls: ['./lending-order-add.component.css']
})
export class LendingOrderAddComponent implements OnInit {

    newLendingOrder: LendingOrder = {
        orderNumber: '', lendingOrderTools: [], warehousemanId: null, description: '', workerId: null
    };

    constructor(private lendingOrderService: LendingOrderService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit(lendingOrder: LendingOrder) {
        this.lendingOrderService.addLendingOrder(lendingOrder).subscribe(
            res => this.router.navigate(['/lendingorders/' + res.id]),
            error => {
                console.log(error);
            }
        );
    }
}
