import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admindashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admindashboard.component.html',
    styleUrls: ['./admindashboard.component.scss'],
})
export class AdmindashboardComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('Bypass eslint');
    }
}
