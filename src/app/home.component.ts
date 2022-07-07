import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    template: ` <p>home works!</p> `,
})
export class HomeComponent implements OnInit {
    // constructor() { }
    ngOnInit(): void {
        console.log('Home');
    }
}
