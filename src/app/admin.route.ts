import { Route } from '@angular/router';
import { AdmindashboardComponent } from './admin/admindashboard.component';
import { AdminhomeComponent } from './admin/adminhome.component';
import { AdminuserComponent } from './admin/adminuser.component';

export const ADMIN_ROUTES: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    { path: 'home', component: AdminhomeComponent },
    { path: 'users', component: AdminuserComponent },
    { path: 'dashboard', component: AdmindashboardComponent },
];
