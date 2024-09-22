import { Component, Input, OnInit, output } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order';
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { DatePipe } from '@angular/common';
import { Alert } from '../../models/alert';
import { StatusDialogComponent } from "../status-dialog/status-dialog.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [OrdersTableComponent, DatePipe, ConfirmationDialogComponent, StatusDialogComponent, RouterLink],
  templateUrl: './orders-table.component.html'
})
export class OrdersTableComponent implements OnInit {

  @Input() orders: Order[] = [];

  updateOrders = output<void>();

  alertData: Alert = new Alert();

  orderSelected: Order | null = null;

  constructor(private ordersService: OrdersService) { }

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
    if (this.alertData.action === "delete" && this.orderSelected) {
      // DELETE ORDER
      const id = this.orderSelected?.documentId?.toString() ?? "";
      this.ordersService.deleteOrder(id).subscribe(() => {
        this.alertData.show = false;
        this.orderSelected = null;

        // Informamos al componente padre que se hay que actualizar la lista de pedidos
        this.updateOrders.emit();
      });
    }
  }

  updateOrder(order: Order) {
    this.orderSelected = order;

    this.alertData = {
      show: true,
      title: "Actualizar pedido",
      message: "Seleccione el nuevo estado del pedido",
      action: "status",
      isDestructive: false
    }
  }

  updateStatus(status: string) {
    if (this.orderSelected) {
      const id = this.orderSelected?.documentId?.toString() ?? "";
      this.ordersService.updateOrderStatus(id, status).subscribe(() => {
        this.alertData.show = false;
        this.orderSelected = null;

        // Informamos al componente padre que se hay que actualizar la lista de pedidos
        this.updateOrders.emit();
      });
    }
  }
}
