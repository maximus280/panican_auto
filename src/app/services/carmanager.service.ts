import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Concessionnaire } from '../models/concessionnaire.model';
import { catchError, lastValueFrom, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { Vehicule } from '../models/vehicule.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Marque } from '../models/marque.model';
import { Options } from '../models/options.model';
import { Carburant } from '../models/carburant.model';
import { Carosserie } from '../models/carosserie.model';
import { UploadResponse } from '../models/upload-response.model';
import { FTPConfig } from '../models/ftp.model';

@Injectable({
  providedIn: 'root'
})
export class CarmanagerService {
  concessionnaire: Concessionnaire | null = null;
  private apiUrl = 'https://panicanautoftpserver-production.up.railway.app/upload';
  constructor(
    private session: SessionStorageService,
    private http: HttpClient
  ) {
    this.concessionnaire = this.getConcessionnaireFromSession();
    console.log(this.concessionnaire);
  }

  getConcessionnaireFromSession(): Concessionnaire | null {
    const concessionnaireData = this.session.get('concessionnaire');
    return concessionnaireData ? JSON.parse(concessionnaireData) as Concessionnaire : null;
  }


  getVehicules(): Observable<VehiculeApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,  // Ajoute le token dans le header,
      'Content-Type': 'application/json'
    });
    console
    return this.http.get<VehiculeApiResponse>(this.concessionnaire?.apiurl + '/vehicules', { headers });
  }



   // Méthode pour mettre à jour l'état d'un véhicule
   updateState(id: number, state: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,  // Ajoute le token dans le header,
      'Content-Type': 'application/json'
    });
    return this.http.patch(this.concessionnaire?.apiurl + '/vehicules/' + id, { state }, { headers });
  }


  getVehicule(id: number): Observable<VehiculeApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,  // Ajoute le token dans le header,
      'Content-Type': 'application/json'
    });
    return this.http.get<VehiculeApiResponse>(this.concessionnaire?.apiurl + '/vehicules/' + id, { headers });
  }
  getVehiculeSingle(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,  // Ajoute le token dans le header,
      'Content-Type': 'application/json'
    });
    return this.http.get(this.concessionnaire?.apiurl + '/vehicules/' + id, { headers });
  }

  unpublishVehicule2(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,
      'Content-Type': 'application/json'
    });
  
    return this.getVehiculeSingle(id).pipe(
      switchMap((response: any) => {
        console.log("Réponse brute de l'API :", response);
  
        if (!response?.data?.attributes) {
          console.error("⚠️ La réponse ne contient pas 'data' ou 'attributes' !");
          return throwError(() => new Error("Données manquantes"));
        }
  
        const vehicule = response.data;
        console.log("Véhicule récupéré :", vehicule);
        console.log("Nom du véhicule :", vehicule.attributes.nom);
        console.log("Prix du véhicule :", vehicule.attributes.prix);
  
        // Modification de l'état du véhicule
        vehicule.attributes.state = 0;
        console.log("Nouveau state :", vehicule.attributes.state);
  
        // Retourner l'Observable de la requête HTTP PUT
        return this.http.put(this.concessionnaire?.apiurl + '/vehicules/' + id, { data: vehicule }, { headers });
      }),
      catchError(error => {
        console.error("❌ Erreur lors de la récupération/mise à jour :", error);
        return throwError(() => error);
      })
    );
  }
  




  depublierVehicule(id: number): void {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,
      'Content-Type': 'application/json'
    });
  
    // Récupérer le véhicule
    this.getVehiculeSingle(id).subscribe(
      (response: any) => {
        if (!response?.data?.attributes) {
          console.error("❌ Erreur : Données manquantes !");
          return;
        }
  
        let vehicule = response.data;
        vehicule.attributes.state = 0; // Dépublication
  
        // Mettre à jour via HTTP PUT
        this.http.put('https://garagejimauto.com/api/index.php/v1/panican_car_manager/vehicules/32', vehicule, { headers })
          .subscribe(
            () => {
              console.log(`✅ Véhicule ${id} dépublié avec succès !`);
             // this.refreshVehicule(id); // Rafraîchir l'affichage
            },
            error => console.error("❌ Erreur lors de la mise à jour :", error)
          );
      },
      error => console.error("❌ Erreur récupération véhicule :", error)
    );
  }










  postVehicule(vehicule: Vehicule): Observable<VehiculeApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<VehiculeApiResponse>(
      `${this.concessionnaire?.apiurl}/vehicules`,
      vehicule.attributes,
      { headers }
    );
  }


  getMarquess(): Observable<MarqueApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,  // Ajoute le token dans le header,
      'Content-Type': 'application/json'
    });
    return this.http.get<MarqueApiResponse>(this.concessionnaire?.apiurl + '/marques', { headers });
  }

  getCarburantss(): Observable<CarburantApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,  // Ajoute le token dans le header,
      'Content-Type': 'application/json'
    });
    return this.http.get<CarburantApiResponse>(this.concessionnaire?.apiurl + '/carburants', { headers });
  }

  getOPtions(): Observable<OptionApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,  // Ajoute le token dans le header,
      'Content-Type': 'application/json'
    });
    return this.http.get<OptionApiResponse>(this.concessionnaire?.apiurl + '/options', { headers });
  }

  getCarosseries(): Observable<CarosserieApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,  // Ajoute le token dans le header,
      'Content-Type': 'application/json'
    });
    return this.http.get<CarosserieApiResponse>(this.concessionnaire?.apiurl + '/carosseries', { headers });
  }

  uploadFiles(files: FileList, id: number): Observable<UploadResponse> {
    const formData = new FormData();

    // Ajouter tous les fichiers dans FormData
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    // Envoi de la requête HTTP POST avec FormData
    return this.http.post<UploadResponse>(`${this.concessionnaire?.apiurl}/uploadtoftp/${id}`, formData);
  }



  uploadFilesFtp(files: File[], ftpConfig: FTPConfig): Observable<UploadResponse> {
    const formData = new FormData();

    // Ajouter les fichiers
    files.forEach(file => {
      formData.append('files', file);
    });

    // Ajouter les paramètres FTP en les transformant en FormData
    formData.append('ftp_host', ftpConfig.ftp_host);
    formData.append('ftp_user', ftpConfig.ftp_user);
    formData.append('ftp_password', ftpConfig.ftp_password);
    formData.append('ftp_port', ftpConfig.ftp_port.toString());

    return this.http.post<UploadResponse>(this.apiUrl, formData);
  }




  deleteObjects(id: number, route: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,  // Ajoute le token dans le header,
      'Content-Type': 'application/json'
    });
    return this.http.delete<any>(this.concessionnaire?.apiurl + route + '/' + id, { headers });
  }



}
interface VehiculeApiResponse {
  data: Vehicule[];
}

interface MarqueApiResponse {
  data: Marque[];
}

interface OptionApiResponse {
  data: Options[];
}


interface CarburantApiResponse {
  data: Carburant[];
}

interface CarosserieApiResponse {
  data: Carosserie[];
}

