import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductResponse } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // Opcionalmente se puede añadir el tipado de la respuesta para que sea más robusto
  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${environment.apiUrl}/products`);
  }
}
