import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order';
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [OrdersTableComponent, DatePipe, ConfirmationDialogComponent],
  templateUrl: './orders-table.component.html'
})
export class OrdersTableComponent implements OnInit {

  @Input() orders: Order[] = [];

  ngOnInit(): void {

  }

}
