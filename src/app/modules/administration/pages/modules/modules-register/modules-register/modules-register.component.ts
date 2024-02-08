import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-register',
  templateUrl: './modules-register.component.html',
  styleUrls: ['./modules-register.component.scss']
})
export class ModulesRegisterComponent implements OnInit {
  
  ngOnInit(): void {
    console.log('Entrou na edição');
  }
  
}
