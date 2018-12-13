import {Category} from './category';

export interface Tool {

    id?: number;
    name: string;
    currentCount: number;
    unitOfMeasure: string;
    allCount: number;
    category?: Category;
    minimalCount: number;
    isUnique: boolean;
    isToReturn: boolean;
    warrantyDate?: Date;
    location?: string;
    isEnable: boolean;
    image?: string;
}
