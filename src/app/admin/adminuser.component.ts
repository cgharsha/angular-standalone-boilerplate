import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';

@Component({
    selector: 'app-adminuser',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './adminuser.component.html',
    styleUrls: ['./adminuser.component.scss'],
})
export class AdminuserComponent implements OnInit {
    constructor(private appServ: AppService) {}

    ngOnInit(): void {
        console.log(this.appServ);
    }
}
