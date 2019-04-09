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


    private lendingReturnOrders: LendingReturnOrder[];
    displayedColumns = ['id', 'orderNumber', 'pickTime', 'workerId', 'warehousemanId', 'returnUntilTime',
        'description'];
    dataSource: MatTableDataSource<LendingReturnOrder>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private lendingOrderService: LendingOrderService,
        private router: Router) {
    }

    ngOnInit() {
        this.lendingOrderService.getLendingReturnOrders().subscribe(
            res => {
                console.log(res);
                this.lendingReturnOrders = res;
                this.dataSource = new MatTableDataSource(this.lendingReturnOrders);
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

    onRowClicked(lendingReturnOrder: LendingReturnOrder) {
        if (TokenStorage.hasUserRole(RoleEnum.WAREHOUSEMAN)) {
            this.router.navigate(['/lendingreturnorders/' + lendingReturnOrder.id]);
        } else {
            this.router.navigate(['/lendingorders/' + lendingReturnOrder.lendingOrderId]);
        }

    }

}
