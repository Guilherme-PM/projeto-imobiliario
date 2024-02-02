import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModulesDTO } from '../../models/modules/modules';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(private http: HttpClient) { }

  buscarModulos(){
    return this.http.get<ModulesDTO[]>(`${environment.apiUrl}/Modules/BuscarTodosModulos/`).pipe(map(data => {
      return data;
    }));
  }

}
