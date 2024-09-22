import { Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AllOrdersComponent } from './private/dashboard/orders/all-orders/all-orders.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'orders',
                pathMatch: 'full'
            },
            {
                path: 'orders',
                component: AllOrdersComponent
            }
        ]
    }
];
