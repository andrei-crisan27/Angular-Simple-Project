import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public credentials = new FormGroup(
    {
      user: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
      check: new FormControl('', [Validators.requiredTrue])
    }
  )

  constructor(private router : Router){

  }

  login(){
    this.credentials.updateValueAndValidity();
    if (this.credentials.controls['user'].value === 'user@mail.com'
    && this.credentials.controls['pass'].value === 'password'){
      this.router.navigate(['/cards']);
    }
  }

}
