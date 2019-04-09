import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeShort} from '../../../../models/employee-short';
import {LendingOrderService} from '../../../../services/lending-order.service';
import {EmployeeService} from '../../../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LendingReturnOrder} from '../../../../models/lending-return-order';
import {TokenStorage} from '../../../../services/auth/token-storage';
import {RoleEnum} from '../../../../models/roleEnum';

@Component({
  selector: 'app-lending-return-order-view',
  templateUrl: './lending-return-order-view.component.html',
  styleUrls: ['./lending-return-order-view.component.css']
})
export class LendingReturnOrderViewComponent implements OnInit {

    lendingReturnOrder: LendingReturnOrder;
    warehouseman: EmployeeShort;
    worker: EmployeeShort;

    @Input() id: number;
    @Output() employeeNameClicked = new EventEmitter<EmployeeShort>();
    isDataLoaded: boolean;
    isWarehouseman: boolean;

    constructor(private lendingOrderService: LendingOrderService,
                private employeeService: EmployeeService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        this.isWarehouseman = TokenStorage.hasUserRole(RoleEnum.WAREHOUSEMAN);
        this.lendingOrderService.getLendingReturnOrder(this.id)
            .subscribe(
                res => {
                    this.lendingReturnOrder = res;
                    if (this.lendingReturnOrder.returnWarehousemanId != null) {
                        this.getWarehouseman(this.lendingReturnOrder.returnWarehousemanId);
                    }
                    this.getWorker(this.lendingReturnOrder.workerId);
                    this.isDataLoaded = true;
                },
                error => console.log(error)
            );
    }

    private getWarehouseman(id: number) {
        this.employeeService.getEmployeeShort(id)
            .subscribe(
                res => this.warehouseman = res,
                error => console.log(error));
    }

    private getWorker(id: number) {
        this.employeeService.getEmployeeShort(id)
            .subscribe(
                res => this.worker = res,
                error => console.log(error));
    }

    editOrder() {
        this.router.navigate(['/lendingreturnorders/' + this.lendingReturnOrder.id]);
    }

    showWarehousemanDialog(employee: EmployeeShort) {
        this.employeeNameClicked.emit(employee);
    }
}
