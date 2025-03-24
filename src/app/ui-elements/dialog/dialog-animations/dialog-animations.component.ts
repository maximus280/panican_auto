import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
    MatDialog,
    MatDialogRef,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CarmanagerService } from '../../../services/carmanager.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
    selector: 'app-dialog-animations',
    imports: [MatButtonModule, MatCardModule],
    templateUrl: './dialog-animations.component.html',
    styleUrl: './dialog-animations.component.scss'
})
export class DialogAnimationsComponent {

    // Dialog Animations
    constructor(
        public dialog: MatDialog
    ) { }
    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(DialogAnimationsExampleDialog, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }

}

// Dialog Overview Example Dialog
@Component({
    selector: 'dialog-animations-example-dialog',
    templateUrl: 'dialog-animations-example-dialog.html',
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent]
})
export class DialogAnimationsExampleDialog {
    delete() {
        console.log(this.data.id);
        this.carManagerService.deleteObjects(this.data.id, this.data.route).subscribe(
            (response) => {
                this.toastr.success('Véhicule supprimé avec succès');
                this.router.navigate(['/car-page']);
                // Rediriger vers la page de liste des véhicules
                window.location.reload();

            },
        (error) => {
                console.error('Erreur lors de la suppression du véhicule :', error);
                this.toastr.error('Erreur lors de la suppression du véhicule');
            }
        );
    }

    constructor(
        public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
        private router: Router,
        private carManagerService: CarmanagerService,
          private toastr: HotToastService,   
        @Inject(MAT_DIALOG_DATA) public data: { id: number; route: string } // Injection des données
    ) { }

}