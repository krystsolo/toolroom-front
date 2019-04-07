import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tool} from '../../../../models/tool';
import {ToolService} from '../../../../services/tool.service';
import {MatDialog} from '@angular/material';
import {TokenStorage} from '../../../../services/auth/token-storage';
import {ToolChoiceDialogComponent} from '../../../tool/shared/tool-choice-dialog/tool-choice-dialog.component';
import {DestructionOrder, DestructionOrderTool} from '../../../../models/destruction-order';

@Component({
  selector: 'app-form-destruction-order',
  templateUrl: './form-destruction-order.component.html',
  styleUrls: ['./form-destruction-order.component.css']
})
export class FormDestructionOrderComponent implements OnInit {

    @Output() editedDestructionOrderChange = new EventEmitter<DestructionOrder>();

    @Input()
    destructionOrder: DestructionOrder;
    tools: Tool[];
    warehousemanUsername: string;

    constructor(private toolService: ToolService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.warehousemanUsername = TokenStorage.getLoggedUsername();
        this.toolService.getTools().subscribe(
            res => {
                console.log(res);
                this.tools = res.filter(tool => !this.destructionOrder.destructionOrderTools
                    .map(value => value.tool.id).includes(tool.id));
            },
            error => {
                console.log(error);
            }
        );
    }

    addNewDestructionOrderTool() {
        this.dialog.open(ToolChoiceDialogComponent, {
            data: {tools: this.tools},
            height: '1000px',
            width: '1000px',
            disableClose: true
        })
            .afterClosed().subscribe(tool => this.addDestructionOrderToolToBuyOrder(tool));
    }

    delete(destructionOrderTool: DestructionOrderTool) {
        const index = this.destructionOrder.destructionOrderTools.indexOf(destructionOrderTool);
        this.destructionOrder.destructionOrderTools.splice(index, 1);
        this.tools.push(destructionOrderTool.tool);
    }

    onSubmit() {
        this.editedDestructionOrderChange.emit(this.destructionOrder);
    }

    private addDestructionOrderToolToBuyOrder(addedTool: Tool): void {
        if (addedTool != null) {
            const destructionOrderTool: DestructionOrderTool = {id: null, tool: addedTool, count: 1};
            this.destructionOrder.destructionOrderTools.push(destructionOrderTool);
            this.tools.splice(this.tools.indexOf(addedTool), 1);
        }
    }
}
