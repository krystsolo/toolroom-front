import {Component, OnInit} from '@angular/core';
import {LendingOrderService} from '../../../../services/lending-order.service';
import {HttpParams} from '@angular/common/http';
import {LendingReturnOrder} from '../../../../models/lending-return-order';

@Component({
    selector: 'app-not-returned-on-time',
    templateUrl: './not-returned-on-time.component.html',
    styleUrls: ['./not-returned-on-time.component.css']
})
export class NotReturnedOnTimeComponent implements OnInit {

    lendingReturnOrders: LendingReturnOrder[];
    isDataLoaded: boolean;

    constructor(private lendingOrderService: LendingOrderService) {
    }

    ngOnInit() {

        this.lendingOrderService.getLendingReturnOrders({lateNotReturned: 'true'})
            .subscribe(
                res => {
                    this.lendingReturnOrders = res;
                    this.isDataLoaded = true;
                },
                error => console.log(error)
            );
    }

}
