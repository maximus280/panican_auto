import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarmanagerService } from '../../../services/carmanager.service';
import { Vehicule } from '../../../models/vehicule.model';
import { Concessionnaire } from '../../../models/concessionnaire.model';
import { SessionStorageService } from 'angular-web-storage';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { combineEventUis } from '@fullcalendar/core/internal.js';

@Component({
    selector: 'app-e-products-grid',
    imports: [MatCardModule, MatProgressSpinner, MatMenuModule, MatButtonModule, RouterLink, MatSelectModule, FormsModule, ReactiveFormsModule, CommonModule],
    templateUrl: './e-products-grid.component.html',
    styleUrl: './e-products-grid.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EProductsGridComponent {
    vehicules: Vehicule[] = [];
    concessionnaire: Concessionnaire | null = null;
    loading: boolean = false;
    constructor(
        private session: SessionStorageService,
        private carManagerService: CarmanagerService,
    ) {
        this.concessionnaire = this.getConcessionnaireFromSession();
    }
    ngOnInit() {
        this.loading = true;
        this.carManagerService.getVehicules().subscribe(
            (vehicules) => {

                this.vehicules = vehicules.data;
                console.log(this.vehicules);
                this.loading = false;
            },
            (error) => {
                console.error('Erreur lors de la récupération des véhicules :', error);
            },
            
        );
    }
    getConcessionnaireFromSession(): Concessionnaire | null {
        const concessionnaireData = this.session.get('concessionnaire');
        return concessionnaireData ? JSON.parse(concessionnaireData) as Concessionnaire : null;
    }
}


function complete(): void {
    throw new Error('Function not implemented.');
}

