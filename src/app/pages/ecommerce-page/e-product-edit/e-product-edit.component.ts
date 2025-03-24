import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule, isPlatformBrowser, NgIf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FileUploadModule } from '@iplab/ngx-file-upload';

import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { CarmanagerService } from '../../../services/carmanager.service';
import { SessionStorageService } from 'angular-web-storage';
import { Marque } from '../../../models/marque.model';
import { Carosserie } from '../../../models/carosserie.model';
import { Carburant } from '../../../models/carburant.model';
import { Options } from '../../../models/options.model';
import { Concessionnaire } from '../../../models/concessionnaire.model';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-e-product-edit',
  imports: [
    NgxFileDropModule,
    MatProgressSpinner,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FeathericonsModule,
    NgxEditorModule,
    MatDatepickerModule,
    FileUploadModule,
    
    MatSelectModule,
    NgIf],
    providers: [provideNativeDateAdapter()],
  templateUrl: './e-product-edit.component.html',
  styleUrl: './e-product-edit.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EProductEditComponent {
submitForm() {
throw new Error('Method not implemented.');
}


  concessionnaire: Concessionnaire | null = null;
  // File Uploader
  public multiple: boolean = false;
  public animation: boolean = true;
  public previewUrl: string | ArrayBuffer | null = null;
  transformedData: any = {};

  currentYear = new Date().getFullYear();
  id: string = '';
  marques: Marque[] = [];
  options: Options[] = [];
  carburants: Carburant[] = [];
  carosseries: Carosserie[] = [];
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
  loading: boolean = false;/*  */
  transformedUrls: string[] = [];
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private fb: FormBuilder,
    private carManagerService: CarmanagerService,
    private toastr: HotToastService,
    private session: SessionStorageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.vehiculeForm = this.fb.group({

      nom: ['', Validators.required],
      description: ['', Validators.required],
      vendu: ['', Validators.required],
      prix: ['', Validators.required],
      année: ['', [
        Validators.required,              // Champ obligatoire
        Validators.pattern('^[0-9]{4}$'), // Doit contenir exactement 4 chiffres
        Validators.min(1900),             // Minimum : 1900 (à ajuster selon besoin)
        Validators.max(new Date().getFullYear()) // Maximum : année en cours
      ]],
      marque: ['', Validators.required],
      categories: ['', Validators.required],
      kilométrage: [null, Validators.required],
      photo: ['',],
      carburant: [null, Validators.required],
      description_detaillee: ['', Validators.required],
      carosserie: ['', Validators.required],
      option: ['', Validators.required],
      transmission: ['', Validators.required],
      modele: ['', Validators.required],


      galerie: this.fb.array([],)  // Stocke la galerie sous forme de tableau
    });
    this.concessionnaire = this.getConcessionnaireFromSession();
  }



  ngOnInit(): void {
     // Récupérer le paramètre "id" depuis l'URL
     this.id = this.route.snapshot.paramMap.get('id') || '';

     console.log('ID du véhicule:', this.id);
    console.log('Helllo');;
    if (isPlatformBrowser(this.platformId)) {
      // Initialize the editor only in the browser
      this.editor = new Editor();
    }
    this.carManagerService.getMarquess().subscribe(
      (resposnse) => {
        this.marques = resposnse.data;
      },
      (error) => {
        console.error('Error fetching marques:', error);
      }
    );


    this.carManagerService.getOPtions().subscribe(
      (resposnse) => {
        this.options = resposnse.data;
      },
      (error) => {
        console.error('Error fetching marques:', error);
      }
    );


    this.carManagerService.getCarburantss().subscribe(
      (resposnse) => {
        this.carburants = resposnse.data;
      },
      (error) => {
        console.error('Error fetching marques:', error);
      }
    );

    this.carManagerService.getCarosseries().subscribe(
      (resposnse) => {
        this.carosseries = resposnse.data;
      },
      (error) => {
        console.error('Error fetching marques:', error);
      }
    );


  }
  vehiculeForm: FormGroup;

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.editor) {
      this.editor.destroy();
    }
  }
  getConcessionnaireFromSession(): Concessionnaire | null {
    const concessionnaireData = this.session.get('concessionnaire');
    return concessionnaireData ? JSON.parse(concessionnaireData) as Concessionnaire : null;
  }
}
