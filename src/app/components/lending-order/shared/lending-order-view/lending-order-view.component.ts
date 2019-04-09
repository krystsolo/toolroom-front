import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LendingOrderService} from '../../../../services/lending-order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LendingOrder} from '../../../../models/lending-order';
import {EmployeeShort} from '../../../../models/employee-short';
import {EmployeeService} from '../../../../services/employee.service';
import {TokenStorage} from '../../../../services/auth/token-storage';
import {RoleEnum} from '../../../../models/roleEnum';

@Component({
  selector: 'app-lending-order-view',
  templateUrl: './lending-order-view.component.html',
  styleUrls: ['./lending-order-view.component.css']
})
export class LendingOrderViewComponent implements OnInit {

    lendingOrder: LendingOrder;
    warehouseman: EmployeeShort;
    worker: EmployeeShort;

    @Output() employeeNameClicked = new EventEmitter<EmployeeShort>();
    @Output() enableReturnTab = new EventEmitter<number>();
    isDataLoaded: boolean;
    isWarehouseman: boolean;

  constructor(private lendingOrderService: LendingOrderService,
              private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      this.isWarehouseman = TokenStorage.hasUserRole(RoleEnum.WAREHOUSEMAN);
      this.lendingOrderService.getLendingOrder(this.getIdFromUrl())
          .subscribe(
              res => {
                  this.lendingOrder = res;
                  this.getWarehouseman(this.lendingOrder.warehousemanId);
                  this.getWorker(this.lendingOrder.workerId);
                  if (this.lendingOrder.lendingReturnOrderId != null) {
                      this.enableReturnTab.emit(this.lendingOrder.lendingReturnOrderId);
                  }
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
        this.router.navigate(['/lendingorders/' + this.lendingOrder.id + '/update']);
    }

    deleteOrder() {
        this.lendingOrderService.deleteLendingOrder(this.lendingOrder.id).subscribe(
            res => {
                console.log(res);
                this.router.navigate(['/lendingorders/']);
            },
            err => {
                console.log(err);
            }
        );
    }

    showWarehousemanDialog(employee: EmployeeShort) {
      this.employeeNameClicked.emit(employee);
    }

    private getIdFromUrl(): number {
        return Number(this.route.snapshot.paramMap.get('id'));
    }
}
