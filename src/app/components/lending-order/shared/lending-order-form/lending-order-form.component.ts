import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BuyOrder, BuyOrderTool} from '../../../../models/buy-order';
import {Tool} from '../../../../models/tool';
import {ToolService} from '../../../../services/tool.service';
import {MatDialog} from '@angular/material';
import {TokenStorage} from '../../../../services/auth/token-storage';
import {ToolChoiceDialogComponent} from '../../../tool/shared/tool-choice-dialog/tool-choice-dialog.component';
import {LendingOrder, LendingOrderTool} from '../../../../models/lending-order';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {EmployeeChoiceDialogComponent} from '../../../employee/shared/employee-choice-dialog/employee-choice-dialog.component';
import {EmployeeShort} from '../../../../models/employee-short';
import {EmployeeService} from '../../../../services/employee.service';
import {EmployeeShortViewComponent} from '../../../employee/shared/employee-short-view-dialog/employee-short-view.component';

@Component({
  selector: 'app-lending-order-form',
  templateUrl: './lending-order-form.component.html',
  styleUrls: ['./lending-order-form.component.css']
})
export class LendingOrderFormComponent implements OnInit {

    @Output() lendingOrderSave = new EventEmitter<LendingOrder>();

    @Input()
    lendingOrder: LendingOrder;
    tools: Tool[];
    warehousemanUsername: string;
    @Input()
    worker: EmployeeShort;

    employees: EmployeeShort[];
    minDate: Date = new Date();

    constructor(private toolService: ToolService,
                public dialog: MatDialog,
                private employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.warehousemanUsername = TokenStorage.getLoggedUsername();
        this.toolService.getTools().subscribe(
            res => {
                console.log(res);
                this.tools = res.filter(tool => !this.lendingOrder.lendingOrderTools
                    .map(value => value.tool.id).includes(tool.id));
            },
            error => {
                console.log(error);
            }
        );

        this.employeeService.getEmployees().subscribe(
            res => this.employees = res,
            error => console.log(error)
        );
    }

    addNewLendingOrderTool() {
        this.dialog.open(ToolChoiceDialogComponent, {
            data: {tools: this.tools},
            height: '1000px',
            width: '1000px',
            disableClose: true
        })
            .afterClosed().subscribe(tool => this.addLendingOrderToolToBuyOrder(tool));
    }

    delete(lendingOrderTool: LendingOrderTool) {
        const index = this.lendingOrder.lendingOrderTools.indexOf(lendingOrderTool);
        this.lendingOrder.lendingOrderTools.splice(index, 1);
        console.log(this.lendingOrder.lendingOrderTools);
        this.tools.push(lendingOrderTool.tool);
    }

    onSubmit() {
        this.lendingOrderSave.emit(this.lendingOrder);
    }

    private addLendingOrderToolToBuyOrder(addedTool: Tool): void {
        if (addedTool != null) {
            const lendingOrderTool: LendingOrderTool = {id: null, tool: addedTool, count: 1};
            this.lendingOrder.lendingOrderTools.push(lendingOrderTool);
            this.tools.splice(this.tools.indexOf(addedTool), 1);
        }
    }

    addWorker() {
        this.dialog.open(EmployeeChoiceDialogComponent, {
            data: {employees: this.employees},
            height: '1000px',
            width: '1000px',
            disableClose: true
        })
            .afterClosed().subscribe(employee => {
                if (employee != null) {
                    this.worker = employee;
                    this.lendingOrder.workerId = this.worker.id;
                }
        });
    }

    deleteWorker() {
        this.worker = null;
    }

    showEmployeeDialog(employee: EmployeeShort) {
            this.dialog.open(EmployeeShortViewComponent, {data: {employee: employee}, height: '700px',
                width: '800px'});
    }
}
