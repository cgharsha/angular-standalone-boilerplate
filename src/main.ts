import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { APP_ROUTES } from './app/app-routing';

if (environment.production) {
    enableProdMode();
}

const routes: Routes = [];

// bootstrapApplication(AppComponent, {
//     providers: [importProvidersFrom(RouterModule.forRoot(routes))],
// });

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(RouterModule.forRoot(APP_ROUTES))],
});
