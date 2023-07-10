import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router){
    this.loginForm= this.fb.group({
      Usuario:['',[Validators.required,Validators.email]],
      Password:['', [Validators.required,Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {

      const loggedIn =sessionStorage.getItem('loggedIn');
      if(loggedIn){
        this.router.navigate(['/main']);
      }
  }
  OnSubmit(){
    const formData=this.loginForm.value;
    /*Toma los datos del formulario login*/
    /*
    const Usuario=formData.Usuario;
    const Password=formData.Password;
    */
    if(this.loginForm.valid){
    /*Crea una sesión con los datos capturados*/
    sessionStorage.setItem('formData', JSON.stringify(formData));
    sessionStorage.setItem('loggedIn','true');
    this.router.navigate(['/main']);
  }else{
    alert('No cumple la validación');
  }
}
}
