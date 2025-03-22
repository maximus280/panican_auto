import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concessionnaire } from '../models/concessionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://carmanager-production-c949.up.railway.app';
  constructor(private http: HttpClient) { }

  resendOtpCode(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/resendotpcode`, { email });
  }

  authenticate(email: string,otp:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, { email,otp });
  }

 
}
