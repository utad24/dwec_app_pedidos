import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from "../../shared/components/toast/toast.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

}
