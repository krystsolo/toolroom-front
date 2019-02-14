import { Component, OnInit } from '@angular/core';
import {BuyOrder, BuyOrderTool} from '../../../models/buy-order';
import {BuyOrderService} from '../../../services/buy-order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-buy-order',
  templateUrl: './add-buy-order.component.html',
  styleUrls: ['./add-buy-order.component.css']
})
export class AddBuyOrderComponent implements OnInit {

    newBuyOrder: BuyOrder = {
        orderCode: '', buyOrderTools: [], warehousemanUsername: '', description: ''
    };


  constructor(private buyOrderService: BuyOrderService,
              private router: Router) { }

  ngOnInit() {
      // todo init actually logged in warehouseman username
  }

    addNewBuyOrderTool() {
      console.log('add new buy order tool');
      // todo implementation add new tool to order
    }

    onSubmit() {
        this.buyOrderService.addBuyOrder(this.newBuyOrder).subscribe(
            res => this.router.navigate(['/buyorders/' + res.id]),
            error => {
                console.log(error);
            }
        );
    }

    delete(buyOrderTool: BuyOrderTool) {
    }
}
