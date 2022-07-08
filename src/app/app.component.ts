import { Component } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { CardComponent } from './card/card.component';
import { UppercasePipe } from './uppercase.pipe';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [
        ButtonDirective,
        CardComponent,
        UppercasePipe,
        RouterModule,
        LoginComponent,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private appServ: AppService) {}
    // title = 'angular-standalone-boilerplate';
    // ngOnInit(): void {
    //     // console.log(this.appServ);
    // }
}
