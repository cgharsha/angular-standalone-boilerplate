import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    // constructor() { }
    ngOnInit(): void {
        console.log('Product Component');
    }
}
