import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Inject, Input, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';
import { NgxEditorModule, Editor, Toolbar } from 'ngx-editor';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FileUploadComponent, FileUploadControl, FileUploadModule } from '@iplab/ngx-file-upload';
import { MatSelectModule } from '@angular/material/select';
import { Marque } from '../../../models/marque.model';
import { CarmanagerService } from '../../../services/carmanager.service';
import { Options } from '../../../models/options.model';
import { Carburant } from '../../../models/carburant.model';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Carosserie } from '../../../models/carosserie.model';
import { HotToastService } from '@ngneat/hot-toast';
import { Vehicule } from '../../../models/vehicule.model';
import { SessionStorageService } from 'angular-web-storage';
import { Concessionnaire } from '../../../models/concessionnaire.model';

import { FTPConfig } from '../../../models/ftp.model';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
@Component({
    selector: 'app-e-create-product',
    imports: [NgxFileDropModule, MatProgressSpinner, DragDropModule, MatCardModule, MatButtonModule, CommonModule, ReactiveFormsModule, MatMenuModule, FormsModule, MatFormFieldModule, MatInputModule, FeathericonsModule, NgxEditorModule, MatDatepickerModule, FileUploadModule, MatSelectModule, NgIf],
    providers: [provideNativeDateAdapter()],
    templateUrl: './e-create-product.component.html',
    styleUrl: './e-create-product.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ECreateProductComponent {

    fileArray: File[] = [];
    concessionnaire: Concessionnaire | null = null;
    // File Uploader
    public multiple: boolean = false;
    public animation: boolean = true;
    public previewUrl: string | ArrayBuffer | null = null;
    transformedData: any = {};

    currentYear = new Date().getFullYear();

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
    async submitForm() {/*  */
        this.loading = true;
        if (this.vehiculeForm.invalid) {
            this.toastr.error('Veuillez remplir tous les champs obligatoires.');
            this.loading = false;
            return;
        }
        if (this.fileArray.length === 0) {
            this.toastr.error('Veuillez ajouter une photo a la galerie.');
            this.loading = false;
            return;
        }
        // console.log(this.vehiculeForm.value);



        var ftpConfig: FTPConfig = new FTPConfig(
            this.concessionnaire!.ftpServer,
            this.concessionnaire!.ftpUser,
            this.concessionnaire!.ftpPass,
            this.concessionnaire!.ftpPort,
        );
        if (!this.vehiculeForm.get("année")?.valid) {
            this.toastr.error("Le année est invalide !");
            return;
        }


        console.log(ftpConfig);

        this.toastr.warning('Le chargement peut prendre quelques minutes.');


        /*   // je recupere les elements du form
          var nom = this.vehiculeForm.get("nom");
          var description = this.vehiculeForm.get("description");
          var vendu = this.vehiculeForm.get("vendu");
          var prix = this.vehiculeForm.get("prix");
          var année = this.vehiculeForm.get("année");
          var marque = this.vehiculeForm.get("marque");
          var categories = this.vehiculeForm.get("categories");
          var kilométrage = this.vehiculeForm.get("kilométrage");
  
          var carburant = this.vehiculeForm.get("carburant");
          var description_detaillee = this.vehiculeForm.get("description_detaillee");
          var carosserie = this.vehiculeForm.get("carosserie");
          var option = this.vehiculeForm.get("option");
          var transmission = this.vehiculeForm.get("transmission");
          var modele = this.vehiculeForm.get("modele"); */

        // Récu
        await this.carManagerService.uploadFilesFtp(this.fileArray, ftpConfig).subscribe(
            (response) => {
                console.log('Files uploaded successfully:', response);
                this.toastr.warning('Images télévisées avec succès sur votre site web');

                this.transformedUrls = response.files.map(file => this.transformUrl(file.url));
                console.log(this.transformUrl);
                var photo = this.transformedUrls[0];
                this.transformUrlsToJson();
                var galerie = this.transformedData;


                const vehiculeData = {
                    type: "vehicule", // Ajuste selon ton besoin
                    id: "1", // Ajuste selon ton besoin
                    attributes: {
                        id: 1, // Ajuste selon ton besoin
                        state: 1, // Ajuste selon ton besoin
                        ordering: 1, // Ajuste selon ton besoin
                        nom: this.vehiculeForm.get("nom")?.value || "",
                        description: this.vehiculeForm.get("description")?.value || "",
                        vendu: this.vehiculeForm.get("vendu")?.value || "",
                        prix: this.vehiculeForm.get("prix")?.value || "",
                        année: this.vehiculeForm.get("année")?.value || "",
                        marque: this.vehiculeForm.get("marque")?.value || "",
                        categories: this.vehiculeForm.get("categories")?.value || "",
                        kilométrage: this.vehiculeForm.get("kilométrage")?.value || 0,
                        photo: this.transformedUrls[0], // Ajoute la valeur appropriée si disponible
                        carburant: this.vehiculeForm.get("carburant")?.value || 0,
                        description_detaillee: this.vehiculeForm.get("description_detaillee")?.value || "",
                        carosserie: this.vehiculeForm.get("carosserie")?.value || "",
                        option: this.vehiculeForm.get("option")?.value || "",
                        transmission: this.vehiculeForm.get("transmission")?.value || "",
                        modele: this.vehiculeForm.get("modele")?.value || "",
                        galerie: this.transformedData // Ajoute les valeurs de la galerie si disponibles
                    }
                };

                const vehiculeInstance = new Vehicule(vehiculeData);
                this.carManagerService.postVehicule(vehiculeInstance).subscribe(
                    (response) => {
                        console.log('Vehicule created:', response);
                        this.toastr.success('Vehicule créé avec succès.');
                        this.loading = false;
                        this.vehiculeForm.reset();
                        this.router.navigate(['/car-page']);

                    },
                    (error) => {
                        console.error('Error creating vehicule:', error.message);
                        this.toastr.error('Erreur lors de la création du vehicule.' + error.message);
                        this.loading = false;
                        this.vehiculeForm.reset();
                    }
                );
            },
            (error) => {
                console.error('Error uploading files:', error);
                this.toastr.error('Erreur lors de l\'envoi des images sur votre site web.');
            }
        );



    }

    ngOnDestroy(): void {
        if (isPlatformBrowser(this.platformId) && this.editor) {
            this.editor.destroy();
        }
    }


    files: { name: string, previewUrl?: string }[] = [];

    // Getter pour faciliter l'accès à la galerie
    get galerie(): FormArray {
        return this.vehiculeForm.get('attributes.galerie') as FormArray;
    }
    getFileNames(): string {
        return this.files.length > 0 ? this.files.map(f => f.name).join(', ') : '';
    }
    // Lorsqu'un fichier est ajouté
    onFileDropped(files: NgxFileDropEntry[]) {
        for (const droppedFile of files) {
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {
                    this.addFile(file);
                    this.fileArray.push(file);
                });
            }
        }
    }
    // Sélection de fichiers via le bouton "Parcourir"
    onFileSelected(event: any) {
        if (event.target.files && event.target.files.length) {
            for (let i = 0; i < event.target.files.length; i++) {
                this.addFile(event.target.files[i]);
            }
        }
    }

    addFile(file: File) {
        const fileData: { name: string, previewUrl?: string } = { name: file.name };

        // Génération d'un aperçu pour les images
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                fileData.previewUrl = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        this.files.push(fileData);
    }

    // Supprimer une image de la galerie
    removeFile(index: number) {
        this.files.splice(index, 1);
        // this.galerie.removeAt(index);
    }

    // Réorganiser les images après un drag & drop
    drop(event: CdkDragDrop<any[]>) {
        moveItemInArray(this.files, event.previousIndex, event.currentIndex);
        moveItemInArray(this.fileArray, event.previousIndex, event.currentIndex);
    }

    getConcessionnaireFromSession(): Concessionnaire | null {
        const concessionnaireData = this.session.get('concessionnaire');
        return concessionnaireData ? JSON.parse(concessionnaireData) as Concessionnaire : null;
    }

    convertFilesToFileList(files: File[]): FileList {
        const dataTransfer = new DataTransfer();
        files.forEach(file => dataTransfer.items.add(file));
        return dataTransfer.files;
    }

    transformUrl(url: string): string {
        const parts = url.split('/');
        return `images/${parts[parts.length - 1]}`;
    }
    transformUrlsToJson() {


        this.transformedUrls.forEach((url: string, index: number) => {
            const fileName = url.split('/').pop(); // Récupérer le nom du fichier
            const newPath = `images/${fileName}`;
            /*  const joomlaPath = `joomlaImage://local-${newPath}?width=1024&height=768`; */

            this.transformedData[`galerie${index}`] = {
                image: `${newPath}`
            };
        });

        console.log(JSON.stringify(this.transformedData, null, 2)); // Vérification du résultat
        return this.transformedData;
    }

}