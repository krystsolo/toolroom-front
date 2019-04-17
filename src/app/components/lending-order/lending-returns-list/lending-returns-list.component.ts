import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {LendingOrderService} from '../../../services/lending-order.service';
import {Router} from '@angular/router';
import {LendingReturnOrder} from '../../../models/lending-return-order';
import {TokenStorage} from '../../../services/auth/token-storage';
import {RoleEnum} from '../../../models/roleEnum';

@Component({
  selector: 'app-lending-returns-list',
  templateUrl: './lending-returns-list.component.html',
  styleUrls: ['./lending-returns-list.component.css']
})
export class LendingReturnsListComponent implements OnInit {


    lendingReturnOrders: LendingReturnOrder[];

    constructor(
        private lendingOrderService: LendingOrderService) {
    }

    ngOnInit() {
        this.lendingOrderService.getLendingReturnOrders().subscribe(
            res => {
                console.log(res);
                this.lendingReturnOrders = res;
            },
            error => {
                console.log(error);
            }
        );
    }
}
