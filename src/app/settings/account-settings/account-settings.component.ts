import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule, Editor, Toolbar } from 'ngx-editor';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';

@Component({
    selector: 'app-account-settings',
    imports: [MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, FeathericonsModule, NgxEditorModule, MatDatepickerModule, MatSelectModule, NgIf],
    providers: [provideNativeDateAdapter()],
    templateUrl: './account-settings.component.html',
    styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent {

    editor!: Editor | null;  // Make it nullable
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            // Initialize the editor only in the browser
            this.editor = new Editor();
        }
    }

    ngOnDestroy(): void {
        if (isPlatformBrowser(this.platformId) && this.editor) {
        this.editor.destroy();
        }
    }

}