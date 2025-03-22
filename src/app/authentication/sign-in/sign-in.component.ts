import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, Router } from '@angular/router';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import {  SessionStorageService } from 'angular-web-storage';



@Component({
    selector: 'app-sign-in',
    imports: [MatProgressSpinner, MatButton, FormsModule, MatFormFieldModule, MatInputModule, FeathericonsModule, MatCheckboxModule, ReactiveFormsModule, NgIf],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class SignInComponent {
loading: boolean=false;
   
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private toastr: HotToastService,
        private session: SessionStorageService
    ) {
        session.clear();
        this.authForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    // Password Hide
    hide = true;

    // Form
    authForm: FormGroup;
    onSubmit() {
        if (this.authForm.valid) {

            var email = this.authForm.value.email;
           this.loading=true
            this.authService.resendOtpCode(email).subscribe({
                next: (response) => {
                    this.toastr.success(response.message || "Code OTP envoyé avec succès !");
                  this.session.set('email', email);
                    this.router.navigate(['authentication/lock-screen']);
                },
                error: (error) => {
                    this.loading=false;
                    this.toastr.error(error.error || "Une erreur s'est produite.");
                },
                complete: () => {
                    this.loading=false;
                }
            });
            this.router.navigate(['/']);
        } else {
            this.toastr.error('Form is invalid. Please check the fields.');
        }
    }

}