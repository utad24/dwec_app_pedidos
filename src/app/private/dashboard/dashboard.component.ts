import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from "../../shared/components/toast/toast.component";
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
