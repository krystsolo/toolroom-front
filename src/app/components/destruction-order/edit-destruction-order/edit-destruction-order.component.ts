import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DestructionOrder} from '../../../models/destruction-order';
import {DestructionOrderService} from '../../../services/destruction-order.service';

@Component({
  selector: 'app-edit-destruction-order',
  templateUrl: './edit-destruction-order.component.html',
  styleUrls: ['./edit-destruction-order.component.css']
})
export class EditDestructionOrderComponent implements OnInit {

    destructionOrder: DestructionOrder = {
        orderCode: '', destructionOrderTools: [], warehousemanId: null, description: ''
    };
    constructor(private destructionOrderService: DestructionOrderService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.destructionOrderService.getDestructionOrder(this.getDestructionOrderIdFromUrl()).subscribe(
            res => {
                this.destructionOrder = res;
            }, error => {
                console.log(error);
            }
        );
    }

    onSubmit(buyOrder: DestructionOrder) {
        this.destructionOrderService.saveDestructionOrder(this.getDestructionOrderIdFromUrl(), buyOrder).subscribe(
            res => this.router.navigate(['/destructionorders/' + res.id]),
            error => {
                console.log(error);
            }
        );
    }

    private getDestructionOrderIdFromUrl() {
        return Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    }

}
