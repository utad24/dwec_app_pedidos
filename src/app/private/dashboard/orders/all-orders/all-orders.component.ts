import { Component, OnInit } from '@angular/core';
import { OrdersTableComponent } from "../../../../shared/components/orders-table/orders-table.component";
import { Order, OrderResponse } from '../../../../shared/models/order';
import { OrdersService } from '../../../../shared/services/orders.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [OrdersTableComponent],
  templateUrl: './all-orders.component.html',
})
export class AllOrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(private ordersService: OrdersService) {

  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getOrders().subscribe({
      next: (orders: OrderResponse) => {
        this.orders = orders.data || [];
      },
      error: (error) => {
        console.error('Error fetching orders:', error);
      }
    });
  }



}
