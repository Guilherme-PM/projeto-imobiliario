/* import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IdentidadeDTO } from '../models/identidade/identidade-dto';
import { LoginDTO } from '../models/login/login-dto';
import { environment } from 'src/environments/environment';
import { ExternalApiDTO } from '../models/external-api/external-api-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private clientID: string = "portal_carrera";
  private clientSecret: string = "297521be-2c21-4c9c-abfb-53a621b10d86";
  private currentUserSubject: BehaviorSubject<IdentidadeDTO>;
  public currentUser: Observable<IdentidadeDTO>;
  public externalToken: string;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IdentidadeDTO>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IdentidadeDTO {
    return this.currentUserSubject.value;
  }

  login(loginDTO: LoginDTO) {
    return this.http.post<any>(`${environment.apiUrl}/Autenticacao/Login`, loginDTO)
        .pipe(map((data: any) => {
            const user =  data.result;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          return user;
        }));
  }

  gerarTokenApiExterna() {
    let dto = new ExternalApiDTO();
    dto.clientID = this.clientID;
    dto.clientSecret = this.clientSecret;
    return this.http.post<any>(`${environment.apiUrl}/Autenticacao/GerarTokenApiExterna`, dto)
        .pipe(map((data: any) => {
          this.externalToken = data.result.token;
          return data;
        }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
 */