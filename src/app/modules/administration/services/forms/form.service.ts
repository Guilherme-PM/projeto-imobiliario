import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forms } from '../../models/forms/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private static componentList: Type<any>[] = [];

  constructor(private http: HttpClient) { }

  findFormByName(name: string){
    return this.http.get<Forms>(`${environment.apiUrl}/Forms/GetFormByName/${name}`).pipe(map(data => {
      return data;
    }));
  }

  findFormById(id: string){
    return this.http.get<Forms>(`${environment.apiUrl}/Forms/GetFormById/${id}`).pipe(map(data => {
      return data;
    }));
  }
  
  registerComponent(component: Type<any>) {    
    FormService.componentList.push(component);
  }

  getComponents(): Type<any>[] {
    return FormService.componentList;
  }
}

export function RegisterComponent() {
  return function (target: any) {
    FormService.prototype.registerComponent(target);
  }
}
