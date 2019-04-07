import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DestructionOrder} from '../models/destruction-order';

@Injectable({
  providedIn: 'root'
})
export class DestructionOrderService {

    baseUrl = environment.baseUrl + 'destructionorders';

    constructor(private http: HttpClient) {
    }

    getDestructionOrders(): Observable<DestructionOrder[]> {
        return this.http.get<DestructionOrder[]>(this.baseUrl);
    }

    getDestructionOrder(id: number): Observable<DestructionOrder> {
        const url = this.baseUrl + '/' + id;
        return this.http.get<DestructionOrder>(url);
    }

    addDestructionOrder(destructionOrder: DestructionOrder) {
        return this.http.post<DestructionOrder>(this.baseUrl, destructionOrder);
    }

    saveDestructionOrder(id: number, destructionOrder: DestructionOrder) {
        const url = this.baseUrl + '/' + id;
        return this.http.put<DestructionOrder>(url, destructionOrder);
    }

    deleteDestructionOrder(id: number) {
        const url = this.baseUrl + '/' + id;
        return this.http.delete<DestructionOrder>(url);
    }
}
