import { Component, OnInit } from '@angular/core';
import {BuyOrder} from '../../../models/buy-order';
import {BuyOrderService} from '../../../services/buy-order.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-buy-order',
  templateUrl: './edit-buy-order.component.html',
  styleUrls: ['./edit-buy-order.component.css']
})
export class EditBuyOrderComponent implements OnInit {

    buyOrder: BuyOrder = {
        orderCode: '', buyOrderTools: [], warehousemanId: null, description: ''
    };
  constructor(private buyOrderService: BuyOrderService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.buyOrderService.getBuyOrder(this.getBuyOrderIdFromUrl()).subscribe(
          res => {
              this.buyOrder = res;
          }, error => {
              console.log(error);
          }
      );
  }

    onSubmit(buyOrder: BuyOrder) {
        this.buyOrderService.saveBuyOrder(this.getBuyOrderIdFromUrl(), buyOrder).subscribe(
            res => this.router.navigate(['/buyorders/' + res.id]),
            error => {
                console.log(error);
            }
        );
    }

    private getBuyOrderIdFromUrl() {
        return Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    }
}
