import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menus } from '../models/menus/menus';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private http: HttpClient) { }

  getAllMenus(){
    return this.http.get<Menus[]>(`${environment.apiUrl}/Menus/GetAllMenus/`).pipe(map(data => {
      return data;
    }));
  }
}
