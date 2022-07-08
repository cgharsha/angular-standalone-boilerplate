import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { APP_ROUTES } from './app/app-routing';
import { AppService } from './app/app.service';

if (environment.production) {
    enableProdMode();
}

const routes: Routes = [];

// bootstrapApplication(AppComponent, {
//     providers: [importProvidersFrom(RouterModule.forRoot(routes))],
// });

bootstrapApplication(AppComponent, {
    providers: [
        { provide: AppService, useClass: AppService },
        importProvidersFrom(RouterModule.forRoot(APP_ROUTES)),
    ],
});
