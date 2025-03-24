import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarmanagerService } from '../../../services/carmanager.service';
import { Vehicule } from '../../../models/vehicule.model';
import { Concessionnaire } from '../../../models/concessionnaire.model';
import { SessionStorageService } from 'angular-web-storage';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { combineEventUis } from '@fullcalendar/core/internal.js';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../../../ui-elements/dialog/dialog-animations/dialog-animations.component';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
    selector: 'app-e-products-grid',
    imports: [MatCardModule, MatProgressSpinner, MatMenuModule, MatButtonModule, RouterLink, MatSelectModule, FormsModule, ReactiveFormsModule, CommonModule],
    templateUrl: './e-products-grid.component.html',
    styleUrl: './e-products-grid.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EProductsGridComponent {
    navigateToRditPage(id: number | undefined) {
        this.router.navigate(['/car-page/product-edit', id]);
    }

    publish(id: number) {
        // this.loading = true;
        this.carManagerService.updateState(id, 1).subscribe({
            next: (response) => {
                this.toastr.success('Véhicule publié avec succès');
                this.loading = false;
                window.location.reload();
            },
            error: (error) => {
                this.loading = false;
                this.toastr.error('Erreur lors de la  publication');
                console.log(error);
            },
            complete: () => {
                this.loading = false;

            }
        });
    }

    unpublish(id: number) {
        // this.loading = true;
        this.carManagerService.updateState(id, 0).subscribe({
            next: (response) => {
                this.toastr.success('Véhicule dépublié avec succès');
                this.loading = false;
                window.location.reload();
            },
            error: (error) => {
                this.toastr.error('Erreur lors de la dépublication');
                this.loading = false;
            },
            complete: () => {
                this.loading = false;
                window.location.reload();
            }
        });
    }
    delete(id: number) {
        this.dialog.open(DialogAnimationsExampleDialog, {
            width: '250px',
            data: { id: id, route: 'vehicule' },
        });
    }
    /*  getVehicules() {
         this.carManagerService.getVehicules().subscribe(
             (response) => {
                 this.vehicules = response;
             },
 
         );
     } */

    vehicules: Vehicule[] = [];
    concessionnaire: Concessionnaire | null = null;
    loading: boolean = false;
    constructor(
        private session: SessionStorageService,
        private carManagerService: CarmanagerService,
        public dialog: MatDialog,
        private toastr: HotToastService,
        private router:Router
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

    openDialog(id: number, route: string, enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(DialogAnimationsExampleDialog, {
            width: '350px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: { id, route }
        });
    }



}


function complete(): void {
    throw new Error('Function not implemented.');
}

