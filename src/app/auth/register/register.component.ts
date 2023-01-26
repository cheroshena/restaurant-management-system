import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    firstname : new FormControl('',
    [Validators.required]),
    secondname : new FormControl('',
    [Validators.required]),
    email : new FormControl('',
    [Validators.required, Validators.email]),
    password : new FormControl('',
    [Validators.required]),
    repeatPassword: new FormControl('',
    [Validators.required,this.passwordsMatch])
  });
  constructor(private router: Router,
    private authService: AuthService) { 
    console.log('userform', this.userForm);
  }

  passwordsMatch(control: FormControl){
    const password = control.root.get('password');
    return password && control.value !== password.value?
    {
      passwordMatch:true
    }
    :null;
  }

  register(){
    if(!this.userForm.valid) {
      return;
    }
    const user = this.userForm.getRawValue();
    this.authService
    .register(user)
    .subscribe
    (s=>this.router.navigate(['/']))
  }

  get firstname(){
    return this.userForm.get('firstname');
  }

  get secondname(){
    return this.userForm.get('secondname');
  }

  get email(){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }

  get repeatPassword(){
    return this.userForm.get('repeatPassword');
  }

  ngOnInit() {
  }

}