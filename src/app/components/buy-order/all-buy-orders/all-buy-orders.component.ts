import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {BuyOrder} from '../../../models/buy-order';
import {BuyOrderService} from '../../../services/buy-order.service';

@Component({
    selector: 'app-all-buy-orders',
    templateUrl: './all-buy-orders.component.html',
    styleUrls: ['./all-buy-orders.component.css']
})
export class AllBuyOrdersComponent implements OnInit {

    private buyOrders: BuyOrder[];
    displayedColumns = ['id', 'orderCode', 'addTimestamp', 'editTimestamp', 'warehousemanUsername',
        'description'];
    dataSource: MatTableDataSource<BuyOrder>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private buyOrderService: BuyOrderService,
        private router: Router) {
    }


    ngOnInit() {
        this.buyOrderService.getBuyOrders().subscribe(
            res => {
                console.log(res);
                this.buyOrders = res;
                this.dataSource = new MatTableDataSource(this.buyOrders);
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

    onRowClicked(buyOrder: BuyOrder) {

        this.router.navigate(['/buyorders/' + buyOrder.id]);
        console.log('BUYORDER: ' + buyOrder);
    }
}
