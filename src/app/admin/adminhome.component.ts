import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-adminhome',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './adminhome.component.html',
    styleUrls: ['./adminhome.component.scss'],
})
export class AdminhomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('Bypass eslint');
    }
}
