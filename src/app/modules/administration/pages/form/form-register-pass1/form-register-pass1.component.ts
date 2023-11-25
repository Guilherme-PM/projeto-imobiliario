import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register-pass1',
  templateUrl: './form-register-pass1.component.html',
  styleUrls: ['./form-register-pass1.component.scss']
})
export class FormRegisterPass1Component {
  constructor(private router: Router) {}
  ngOnInit() {

  }

  navigateToNext() {
    this.router.navigate(['/steps/seat'])
  }
}
