import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { OrderResponse } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders() {
    const params = new HttpParams().set('populate', 'products')
    return this.http.get<OrderResponse>(`${environment.apiUrl}/orders`, { params });
  }

}
