import {Tool} from './tool';

export interface BuyOrder {

    id?: number;
    orderCode: string;
    addTimestamp?: Date;
    editTimestamp?: Date;
    buyOrderTools?: Array<BuyOrderTool>;
    warehousemanUsername?: string;
    description?: string;
}

export interface BuyOrderTool {

    id?: number;
    tool: Tool;
    count: number;
}
