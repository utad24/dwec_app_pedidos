import { Component, Input, OnInit, output } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order';
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { DatePipe } from '@angular/common';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [OrdersTableComponent, DatePipe, ConfirmationDialogComponent],
  templateUrl: './orders-table.component.html'
})
export class OrdersTableComponent implements OnInit {

  @Input() orders: Order[] = [];
  alertData: Alert = new Alert();

  orderSelected: Order | null = null;

  ngOnInit(): void {

  }

  deleteOrder(order: Order) {
    this.alertData = {
      show: true,
      title: "Eliminar pedido",
      message: "¿Estás seguro de que deseas eliminar este pedido?",
      action: "delete",
      isDestructive: true
    }
    this.orderSelected = order;
  }

  cancelAction() {
    this.alertData.show = false;
    this.orderSelected = null;
  }

  makeAction() {
    if (this.alertData.action === "delete") {
      // DELETE ORDER
      this.alertData.show = false;
      this.orderSelected = null;
    }
  }

}
