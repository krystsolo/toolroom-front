import {Tool} from './tool';

export interface LendingReturnOrder {

    id?: number;
    pickTime?: Date;
    lendingReturnOrderTools: LendingReturnOrderTool[];
    returnUntilTime: Date;
    isReturned: boolean;
    workerId: number;
    orderNumber: string;
    editTime?: Date;
    description?: string;
    returnTime?: Date;
    returnWarehousemanId?: number;
    lendingOrderId: number;
}

export interface LendingReturnOrderTool {

    id?: number;
    returnDate?: Date;
    isReturned: boolean;
    returnWarehousemanId?: number;
    tool: Tool;
    count: number;
}
