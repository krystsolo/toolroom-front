import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {DestructionOrder} from '../../../models/destruction-order';
import {DestructionOrderService} from '../../../services/destruction-order.service';

@Component({
  selector: 'app-all-destruction-order',
  templateUrl: './all-destruction-order.component.html',
  styleUrls: ['./all-destruction-order.component.css']
})
export class AllDestructionOrderComponent implements OnInit {

    private destructionOrders: DestructionOrder[];
    displayedColumns = ['id', 'orderCode', 'addTimestamp', 'editTimestamp', 'warehousemanUsername',
        'description'];
    dataSource: MatTableDataSource<DestructionOrder>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private destructionOrderService: DestructionOrderService,
        private router: Router) {
    }


    ngOnInit() {
        this.destructionOrderService.getDestructionOrders().subscribe(
            res => {
                console.log(res);
                this.destructionOrders = res;
                this.dataSource = new MatTableDataSource(this.destructionOrders);
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

    onRowClicked(destructionOrder: DestructionOrder) {

        this.router.navigate(['/destructionorders/' + destructionOrder.id]);
        console.log('BUYORDER: ' + destructionOrder);
    }
}
