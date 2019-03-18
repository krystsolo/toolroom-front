import {Tool} from './tool';

export interface BuyOrder {

    id?: number;
    orderCode: string;
    addTimestamp?: Date;
    editTimestamp?: Date;
    buyOrderTools?: Array<BuyOrderTool>;
    warehousemanId?: number;
    description?: string;
}

export interface BuyOrderTool {

    id?: number;
    tool: Tool;
    count: number;
}
