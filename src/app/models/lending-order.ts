import {Tool} from './tool';

export interface LendingOrder {
    id?: number;
    pickTime?: Date;
    lendingOrderTools?: LendingOrderTool[];
    returnUntilTime?: Date;
    warehousemanId: number;
    workerId: number;
    orderNumber: string;
    editTime?: Date;
    description?: string;
    lendingReturnOrderId?: number;
}

export interface LendingOrderTool {

    id?: number;
    tool: Tool;
    count: number;
}
