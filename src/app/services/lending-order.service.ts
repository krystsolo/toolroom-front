import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LendingOrder} from '../models/lending-order';
import {LendingReturnOrder} from '../models/lending-return-order';

@Injectable({
  providedIn: 'root'
})
export class LendingOrderService {

    baseUrl = environment.baseUrl + 'lendingorders';
    returnUrl = environment.baseUrl + 'lendingreturnorders';

    constructor(private http: HttpClient) {
    }

    getLendingOrders(): Observable<LendingOrder[]> {
        return this.http.get<LendingOrder[]>(this.baseUrl);
    }

    getLendingOrder(id: number): Observable<LendingOrder> {
        const url = this.baseUrl + '/' + id;
        return this.http.get<LendingOrder>(url);
    }

    addLendingOrder(lendingOrder: LendingOrder) {
        return this.http.post<LendingOrder>(this.baseUrl, lendingOrder);
    }

    saveLendingOrder(id: number, lendingOrder: LendingOrder) {
        const url = this.baseUrl + '/' + id;
        return this.http.put<LendingOrder>(url, lendingOrder);
    }

    deleteLendingOrder(id: number) {
        const url = this.baseUrl + '/' + id;
        return this.http.delete<LendingOrder>(url);
    }

    getLendingReturnOrder(id: number): Observable<LendingReturnOrder> {
        const url = this.returnUrl + '/' + id;
        return this.http.get<LendingReturnOrder>(url);
    }

    getLendingReturnOrders(data?: any): Observable<LendingReturnOrder[]> {
        return this.http.get<LendingReturnOrder[]>(this.returnUrl, {params: data});
    }

    makeReturnOfLendingOrder(lendingReturnOrderId: number, lendingReturnOrder: LendingReturnOrder): Observable<LendingReturnOrder> {
        const url = this.returnUrl + '/' + lendingReturnOrderId ;
        return this.http.put<LendingReturnOrder>(url, lendingReturnOrder);
    }

}
