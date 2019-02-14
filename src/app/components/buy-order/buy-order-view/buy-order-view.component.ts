import {Component, OnInit} from '@angular/core';
import {BuyOrderService} from '../../../services/buy-order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BuyOrder} from '../../../models/buy-order';

@Component({
    selector: 'app-buy-order-view',
    templateUrl: './buy-order-view.component.html',
    styleUrls: ['./buy-order-view.component.css']
})
export class BuyOrderViewComponent implements OnInit {

    buyOrder: BuyOrder = {
        orderCode: '', buyOrderTools: [], warehousemanUsername: '', description: '', addTimestamp: null, editTimestamp: null
    };

    constructor(private buyOrderService: BuyOrderService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.buyOrderService.getBuyOrder(this.getBuyOrderIdFromUrl()).subscribe(
            res => {
                this.buyOrder = res;
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
            },
            err => {
                console.log(err);
            }
        );
        this.router.navigate(['/buyorders/']);
    }
}
