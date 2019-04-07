import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DestructionOrder} from '../../../models/destruction-order';
import {DestructionOrderService} from '../../../services/destruction-order.service';

@Component({
  selector: 'app-add-destruction-order',
  templateUrl: './add-destruction-order.component.html',
  styleUrls: ['./add-destruction-order.component.css']
})
export class AddDestructionOrderComponent implements OnInit {

    newDestructionOrder: DestructionOrder = {
        orderCode: '', destructionOrderTools: [], warehousemanId: null, description: ''
    };


    constructor(private destructionOrderService: DestructionOrderService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit(destructionOrder: DestructionOrder) {
        this.destructionOrderService.addDestructionOrder(destructionOrder).subscribe(
            res => this.router.navigate(['/destructionorders/' + res.id]),
            error => {
                console.log(error);
            }
        );
    }
}
