import {Component, OnInit, ViewChild} from '@angular/core';
import {LendingOrderService} from '../../../services/lending-order.service';
import {LendingReturnOrder} from '../../../models/lending-return-order';

@Component({
  selector: 'app-lending-returns-list',
  templateUrl: './lending-returns-list.component.html',
  styleUrls: ['./lending-returns-list.component.css']
})
export class LendingReturnsListComponent implements OnInit {


    lendingReturnOrders: LendingReturnOrder[];
    isDataLoaded: boolean;

    constructor(
        private lendingOrderService: LendingOrderService) {
    }

    ngOnInit() {
        this.lendingOrderService.getLendingReturnOrders().subscribe(
            res => {
                console.log(res);
                this.lendingReturnOrders = res;
                this.isDataLoaded = true;
            },
            error => {
                console.log(error);
            }
        );
    }
}
