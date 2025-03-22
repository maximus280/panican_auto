import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ToggleService } from '../header/toggle.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';
import { Concessionnaire } from '../../models/concessionnaire.model';
import { SessionStorageService } from 'angular-web-storage';

@Component({
    selector: 'app-sidebar',
    imports: [NgScrollbarModule, MatExpansionModule, RouterLinkActive, RouterModule, RouterLink, NgClass, FeathericonsModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

    concessionnaire: Concessionnaire | null = null;
    constructor(
        private toggleService: ToggleService,
         private session: SessionStorageService,
         private router: Router 
    ) {
        
        this.toggleService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
        this.concessionnaire=this.getConcessionnaireFromSession();
    }

    // Toggle Service
    isToggled = false;
    toggle() {
        this.toggleService.toggle();
    }

    // Mat Expansion
    panelOpenState = false;

    
    getConcessionnaireFromSession(): Concessionnaire | null {
            const concessionnaireData = this.session.get('concessionnaire');
            return concessionnaireData ? JSON.parse(concessionnaireData) as Concessionnaire : null;
        }

        logout() {
           this.session.clear();
           this.router.navigate(['/authentication']);
            }
}