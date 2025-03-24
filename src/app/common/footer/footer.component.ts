import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    fullYear?: number;
    constructor() { }
    ngOnInit() {
        this.fullYear = new Date().getFullYear();
    }

}