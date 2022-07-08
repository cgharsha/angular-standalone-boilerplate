import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'product',
        loadComponent: () =>
            import('./product.component').then((m) => m.ProductComponent),
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./admin.route').then((mod) => mod.ADMIN_ROUTES),
    },
    {
        path: '**',
        redirectTo: 'home',
        // component: PagenotfoundComponent,
    },
];
