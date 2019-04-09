import {Component, OnInit, ViewChild} from '@angular/core';
import {BuyOrder} from '../../../models/buy-order';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BuyOrderService} from '../../../services/buy-order.service';
import {Router} from '@angular/router';
import {LendingOrder, LendingOrderTool} from '../../../models/lending-order';
import {LendingOrderService} from '../../../services/lending-order.service';

@Component({
  selector: 'app-lending-orders-list',
  templateUrl: './lending-orders-list.component.html',
  styleUrls: ['./lending-orders-list.component.css']
})
export class LendingOrdersListComponent implements OnInit {

    private lendingOrders: LendingOrder[];
    displayedColumns = ['id', 'orderNumber', 'pickTime', 'workerId', 'warehousemanId', 'returnUntilTime',
        'description'];
    dataSource: MatTableDataSource<LendingOrder>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private lendingOrderService: LendingOrderService,
        private router: Router) {
    }


    ngOnInit() {
        this.lendingOrderService.getLendingOrders().subscribe(
            res => {
                console.log(res);
                this.lendingOrders = res;
                this.dataSource = new MatTableDataSource(this.lendingOrders);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            },
            error => {
                console.log(error);
            }
        );
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    onRowClicked(lendingOrder: LendingOrder) {
        this.router.navigate(['/lendingorders/' + lendingOrder.id]);
    }

}
