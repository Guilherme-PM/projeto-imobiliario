import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {
  private static componentList: Type<any>[] = [];

  constructor() { }

  registerComponent(component: Type<any>) {    
    FormRegisterService.componentList.push(component);
  }

  getComponents(): Type<any>[] {
    return FormRegisterService.componentList;
  }
}

export function RegisterComponent() {
  return function (target: any) {
    FormRegisterService.prototype.registerComponent(target);
  }
}
