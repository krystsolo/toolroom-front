import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LendingReturnOrder} from '../../../../models/lending-return-order';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {LendingOrderService} from '../../../../services/lending-order.service';
import {Router} from '@angular/router';
import {TokenStorage} from '../../../../services/auth/token-storage';
import {RoleEnum} from '../../../../models/roleEnum';

@Component({
    selector: 'app-lending-return-table',
    templateUrl: './lending-return-table.component.html',
    styleUrls: ['./lending-return-table.component.css']
})
export class LendingReturnTableComponent implements OnInit {

    @Input()
    lendingReturnOrders: LendingReturnOrder[];
    displayedColumns = ['id', 'orderNumber', 'pickTime', 'workerId', 'warehousemanId', 'returnUntilTime',
        'description'];
    dataSource: MatTableDataSource<LendingReturnOrder>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private router: Router) {
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.lendingReturnOrders);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
