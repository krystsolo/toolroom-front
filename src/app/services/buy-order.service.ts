import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BuyOrder} from '../models/buy-order';

@Injectable({
    providedIn: 'root'
})
export class BuyOrderService {

    baseUrl = environment.baseUrl + 'buyorders';

    constructor(private http: HttpClient) {
    }

    getBuyOrders(): Observable<BuyOrder[]> {
        return this.http.get<BuyOrder[]>(this.baseUrl);
    }

    getBuyOrder(id: number): Observable<BuyOrder> {
        const url = this.baseUrl + '/' + id;
        return this.http.get<BuyOrder>(url);
    }

    addBuyOrder(buyOrder: BuyOrder) {
        return this.http.post<BuyOrder>(this.baseUrl, buyOrder);
    }

    saveBuyOrder(id: number, buyOrder: BuyOrder) {
        const url = this.baseUrl + '/' + id;
        return this.http.put<BuyOrder>(url, buyOrder);
    }

    deleteBuyOrder(id: number) {
        const url = this.baseUrl + '/' + id;
        return this.http.delete<BuyOrder>(url);
    }
}
