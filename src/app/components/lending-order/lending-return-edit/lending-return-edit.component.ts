import {Component, Input, OnInit} from '@angular/core';
import {LendingOrder, LendingOrderTool} from '../../../models/lending-order';
import {Tool} from '../../../models/tool';
import {EmployeeShort} from '../../../models/employee-short';
import {ToolService} from '../../../services/tool.service';
import {MatDialog} from '@angular/material';
import {EmployeeService} from '../../../services/employee.service';
import {TokenStorage} from '../../../services/auth/token-storage';
import {ToolChoiceDialogComponent} from '../../tool/shared/tool-choice-dialog/tool-choice-dialog.component';
import {EmployeeChoiceDialogComponent} from '../../employee/shared/employee-choice-dialog/employee-choice-dialog.component';
import {EmployeeShortViewComponent} from '../../employee/shared/employee-short-view-dialog/employee-short-view.component';
import {LendingOrderService} from '../../../services/lending-order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LendingReturnOrder, LendingReturnOrderTool} from '../../../models/lending-return-order';

@Component({
    selector: 'app-lending-return-edit',
    templateUrl: './lending-return-edit.component.html',
    styleUrls: ['./lending-return-edit.component.css']
})
export class LendingReturnEditComponent implements OnInit {

    lendingReturnOrder: LendingReturnOrder;
    warehousemanUsername: string;
    worker: EmployeeShort;
    isDataLoaded: boolean;

    constructor(public dialog: MatDialog,
                private lendingOrderService: LendingOrderService,
                private employeeService: EmployeeService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.warehousemanUsername = TokenStorage.getLoggedUsername();
        this.lendingOrderService.getLendingReturnOrder(this.getIdFromUrl()).subscribe(
            res => {
                this.lendingReturnOrder = res;
                this.employeeService.getEmployeeShort(this.lendingReturnOrder.workerId).subscribe(
                    worker => {
                        this.worker = worker;
                    },
                    error => console.log(error)
                );
                this.isDataLoaded = true;
            }, error => {
                console.log(error);
            }
        );
    }

    onSubmit() {
        this.lendingOrderService.makeReturnOfLendingOrder(this.getIdFromUrl(), this.lendingReturnOrder).subscribe(
            res => this.router.navigate(['/lendingorders/' + res.id]),
            error => {
                console.log(error);
            }
        );
    }

    showEmployeeDialog(employee: EmployeeShort) {
        this.dialog.open(EmployeeShortViewComponent, {
            data: {employee: employee}, height: '700px',
            width: '800px'
        });
    }

    private getIdFromUrl() {
        return Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    }

    returnTool(lendingReturnOrderTool: LendingReturnOrderTool) {
        this.lendingReturnOrder.lendingReturnOrderTools
            .filter(l => l.id === lendingReturnOrderTool.id)
            .forEach(l => l.isReturned = true);
    }

    returnAll() {
        this.lendingReturnOrder.lendingReturnOrderTools.forEach(l => l.isReturned = true);
    }

    undoReturnTool(lendingReturnOrderTool: LendingReturnOrderTool) {
        this.lendingReturnOrder.lendingReturnOrderTools
            .filter(l => l.id === lendingReturnOrderTool.id)
            .forEach(l => l.isReturned = false);
    }
}
