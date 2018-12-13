import {Role} from './role';

export interface Employee {

    id?: number;
    firstName: string;
    userName: string;
    surName: string;
    image?: string;
    roles: Array<Role>;
    isActive: boolean;
    workingGroup?: string;
    phoneNumber: number;
    password: string;
    email?: string;
}
