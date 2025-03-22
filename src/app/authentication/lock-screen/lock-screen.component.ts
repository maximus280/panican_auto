import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';
import { SessionStorageService } from 'angular-web-storage';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Concessionnaire } from '../../models/concessionnaire.model';



@Component({
    selector: 'app-lock-screen',
    imports: [MatFormFieldModule, MatIconButton, MatProgressSpinner, FeathericonsModule, MatInputModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule, NgIf, FeathericonsModule],
    templateUrl: './lock-screen.component.html',
    styleUrl: './lock-screen.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LockScreenComponent {
   
    timeLeft: number = 20;//180; // 3 minutes en secondes
    showResentButton: boolean = false;
    showTimerText: boolean = true;
    interval: any;

    email: string = '';
    loading: boolean = false;
    // isToggled
    isToggled = false;
    constructor(
        private fb: FormBuilder,
        private session: SessionStorageService,
        private toastr: HotToastService,
        private authService: AuthService,
        private router: Router,

    ) {
        this.authForm = this.fb.group({
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    // Password Hide
    hide = true;
    // Form
    authForm: FormGroup;
    onSubmit() {
        if (this.authForm.valid) {
            this.loading = true;
            var password = this.authForm.value.password;

            this.authService.authenticate(this.email, password).subscribe({
                next: (response) => {
                    console.log('Auth successful:', response);
                    this.saveConcessionnaireToSession(response.concessionnaire);
                    this.toastr.success('Authentification réussie:');
                    this.router.navigate(['/car-page']);
                    this.loading = false;
                },
                error: (error) => {
                    // this.errorMessage = error.error || 'Erreur de connexion';
                    this.toastr.error('Erreur de connexion');
                    this.loading = false;
                }, complete: () => {
                    this.loading = false;
                }
            });
        } else {
            this.toastr.error('Formulaire invalide. Veuillez vérifier les champs.');
        }
    }
    ngOnInit() {
        this.email = this.session.get('email');
        this.startCountdown();
    }


    saveConcessionnaireToSession(concessionnaire: Concessionnaire) {
        this.session.set('concessionnaire', JSON.stringify(concessionnaire));
    }


    startCountdown() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            } else {
                this.showResentButton = true;
                clearInterval(this.interval); // Arrête le compteur
            }
        }, 1000);
    }

    getFormattedTime(): string {
        const minutes: number = Math.floor(this.timeLeft / 60);
        const seconds: number = this.timeLeft % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    resetCountdown() {
        this.timeLeft = 60; // Remets le timer à sa valeur initiale
        this.showResentButton = false;
        this.showTimerText = true;
        this.startCountdown(); // Redémarre le compteur
    }
    
    onButtonClick() {
        this.showTimerText = false;
       this.resetCountdown();
        this.authService.resendOtpCode(this.email).subscribe(
            (response) => {
                console.log('OTP envoyé avec succès:', response);
                this.toastr.success('OTP envoyé avec succès');
            },
            (error) => {
                console.error('Erreur lors de l\'envoi de l\'OTP:', error);
                this.toastr.error('Erreur lors de l\'envoi de l\'OTP');
            }
        );
    }
}