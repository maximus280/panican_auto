import { Component } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';
import { Router, RouterLink } from '@angular/router';
import { ToggleService } from './toggle.service';
import { Concessionnaire } from '../../models/concessionnaire.model';
import { SessionStorageService } from 'angular-web-storage';
import { routes } from '../../app.routes';

@Component({
    selector: 'app-header',
    imports: [FeathericonsModule, MatButtonModule, MatMenuModule, RouterLink, NgClass],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    providers: [
        DatePipe
    ]
})
export class HeaderComponent {
    concessionnaire: Concessionnaire | null = null;
    constructor(
        public toggleService: ToggleService,
        private datePipe: DatePipe,
        private session: SessionStorageService,
        private router: Router
    ) {
        this.toggleService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
        this.formattedDate = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');
        this.concessionnaire=this.getConcessionnaireFromSession();
    }

    // Toggle Service
    isToggled = false;
    toggle() {
        this.toggleService.toggle();
    }

    // Dark Mode
    toggleTheme() {
        this.toggleService.toggleTheme();
    }

    logout(){
        this.session.clear();
        this.router.navigate(['/authentication/logout']);
    }

    // Current Date
    currentDate: Date = new Date();
    formattedDate: any;
 getConcessionnaireFromSession(): Concessionnaire | null {
        const concessionnaireData = this.session.get('concessionnaire');
        return concessionnaireData ? JSON.parse(concessionnaireData) as Concessionnaire : null;
    }
}