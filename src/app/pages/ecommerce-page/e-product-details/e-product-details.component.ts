import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule, NgFor } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { OutletsDetailsComponent } from './outlets-details/outlets-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { Vehicule } from '../../../models/vehicule.model';
import { CarmanagerService } from '../../../services/carmanager.service';
import { Concessionnaire } from '../../../models/concessionnaire.model';
import { SessionStorageService } from 'angular-web-storage';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { HotToastService } from '@ngneat/hot-toast';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../../../ui-elements/dialog/dialog-animations/dialog-animations.component';

@Component({
    selector: 'app-e-product-details',
    imports: [CommonModule, MatProgressSpinner, RouterLink, MatCardModule, MatButtonModule, FeathericonsModule, CarouselModule, NgFor, MatProgressBarModule, MatMenuModule],
    templateUrl: './e-product-details.component.html',
    styleUrl: './e-product-details.component.scss'
})
export class EProductDetailsComponent {
    concessionnaire: Concessionnaire | null = null;
    loading: boolean = false;/*  */
    // Product Images
    productImages = [
        {
            url: 'images/products/product-details1.jpg'
        },
        {
            url: 'images/products/product-details2.jpg'
        },
        {
            url: 'images/products/product-details3.jpg'
        },
        {
            url: 'images/products/product-details4.jpg'
        }
    ]
    selectedImage!: string;
    changeimage(image: string) {
        this.selectedImage = image;
    }


    id: string = '';
    vehicule: Vehicule | null = null;
    constructor(
        private route: ActivatedRoute,
        private carManagerService: CarmanagerService,
        private session: SessionStorageService,
        private toastr: HotToastService,   
        public dialog: MatDialog
    ) { 
     
    }
    async ngOnInit() {
        // Récupérer le paramètre "id" depuis l'URL
        this.id = this.route.snapshot.paramMap.get('id') || '';

        console.log('ID du véhicule:', this.id);
        this.loading = true;
       await this.carManagerService.getVehicule(parseInt(this.id)).subscribe(
            (response) => {
                console.log('Réponse de l\'API :', response.data);

                // Transformation en instance de Vehicule
                this.vehicule = new Vehicule(response.data);

            },
            (error) => {
                this.loading = false;
                this.toastr.error('Erreur lors de la récupération des données :', error);
            },
            () => {
                this.loading = false;
            },
        );

        this.concessionnaire = this.getConcessionnaireFromSession();
    }

    getConcessionnaireFromSession(): Concessionnaire | null {
        const concessionnaireData = this.session.get('concessionnaire');
        return concessionnaireData ? JSON.parse(concessionnaireData) as Concessionnaire : null;
    }

    openDialog(id: number, route: string,enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(DialogAnimationsExampleDialog, {
            width: '350px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: { id, route }
        });
    }

    stripHtml(html: string): string {
        return html ? html.replace(/<[^>]+>/g, '') : '';
      }
      
}