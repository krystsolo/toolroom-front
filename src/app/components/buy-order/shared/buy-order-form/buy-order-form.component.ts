import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TokenStorage} from '../../../../services/auth/token-storage';
import {BuyOrder, BuyOrderTool} from '../../../../models/buy-order';
import {ToolChoiceDialogComponent} from '../../../tool/shared/tool-choice-dialog/tool-choice-dialog.component';
import {MatDialog} from '@angular/material';
import {Tool} from '../../../../models/tool';
import {ToolService} from '../../../../services/tool.service';

@Component({
    selector: 'app-buy-order-form',
    templateUrl: './buy-order-form.component.html',
    styleUrls: ['./buy-order-form.component.css']
})
export class BuyOrderFormComponent implements OnInit {

    @Output() editedBuyOrderChange = new EventEmitter<BuyOrder>();

    @Input()
    buyOrder: BuyOrder;
    tools: Tool[];
    warehousemanUsername: string;
    toolsIdInOrder: number[] = new Array<number>();
    isDataLoaded: boolean;

    constructor(private toolService: ToolService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.warehousemanUsername = TokenStorage.getLoggedUsername();
        this.toolService.getTools().subscribe(
            res => {
                console.log(res);
                this.tools = res;
                this.isDataLoaded = true;
            },
            error => {
                console.log(error);
            }
        );
    }

    addNewBuyOrderTool() {
        console.log('add new buy order tool' + this.toolsIdInOrder);
        this.dialog.open(ToolChoiceDialogComponent, {
            data: {tools: this.tools},
            height: '1000px',
            width: '1000px',
            disableClose: true
        })
            .afterClosed().subscribe(tool => this.addBuyOrderToolToBuyOrder(tool));
    }

    delete(buyOrderTool: BuyOrderTool) {
        const index = this.buyOrder.buyOrderTools.indexOf(buyOrderTool);
        this.buyOrder.buyOrderTools.splice(index, 1);
        this.tools.push(buyOrderTool.tool);
    }

    onSubmit() {
        this.editedBuyOrderChange.emit(this.buyOrder);
    }

    private addBuyOrderToolToBuyOrder(addedTool: Tool): void {
        if (addedTool != null) {
            this.tools = this.tools.filter(tool => tool.id !== addedTool.id);
            let count = 0;
            if (addedTool.isUnique) {
                count = 1;
            }
            const buyOrderTool: BuyOrderTool = {id: null, tool: addedTool, count: count};
            this.buyOrder.buyOrderTools.push(buyOrderTool);
        }
    }
}
