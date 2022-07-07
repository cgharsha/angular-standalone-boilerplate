import { Component } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { CardComponent } from './card/card.component';
import { UppercasePipe } from './uppercase.pipe';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [ButtonDirective, CardComponent, UppercasePipe, RouterModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-standalone-boilerplate';
}
