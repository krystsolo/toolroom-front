import { Component, OnInit } from '@angular/core';
import {BuyOrder, BuyOrderTool} from '../../../models/buy-order';
import {BuyOrderService} from '../../../services/buy-order.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

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
    }

    onSubmit() {

    }
}
