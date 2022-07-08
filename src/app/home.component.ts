import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, LoginComponent],
    template: ` <app-login></app-login> `,
})
export class HomeComponent implements OnInit {
    // constructor() { }
    ngOnInit(): void {
        console.log('Home');
    }
}
