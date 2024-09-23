import { Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AllOrdersComponent } from './private/dashboard/orders/all-orders/all-orders.component';
import { NewOrderComponent } from './private/dashboard/orders/new-order/new-order.component';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: DashboardComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'orders',
                pathMatch: 'full'
            },
            {
                path: 'orders',
                component: AllOrdersComponent
            },
            {
                path: 'orders/new',
                component: NewOrderComponent
            }
        ]
    }
];
