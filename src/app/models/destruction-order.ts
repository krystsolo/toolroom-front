import {Tool} from './tool';

export interface DestructionOrder {
    id?: number;
    orderCode: string;
    addTimestamp?: Date;
    editTimestamp?: Date;
    destructionOrderTools?: Array<DestructionOrderTool>;
    warehousemanId?: number;
    description?: string;
}

export interface DestructionOrderTool {

    id?: number;
    tool: Tool;
    count: number;
}
