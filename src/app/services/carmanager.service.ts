import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Concessionnaire } from '../models/concessionnaire.model';
import { map, Observable, tap } from 'rxjs';
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


  getVehicule(id: number): Observable<VehiculeApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.concessionnaire?.token}`,  // Ajoute le token dans le header,
      'Content-Type': 'application/json'
    });
    return this.http.get<VehiculeApiResponse>(this.concessionnaire?.apiurl + '/vehicules/' + id, { headers });
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

