import { Component } from '@angular/core';
import { OrdersTableComponent } from "../../../../shared/components/orders-table/orders-table.component";

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [OrdersTableComponent],
  templateUrl: './all-orders.component.html',
})
export class AllOrdersComponent {

}
