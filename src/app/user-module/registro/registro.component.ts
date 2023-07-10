import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  registroForm: FormGroup;

  constructor(private fb: FormBuilder){

    this.registroForm = this.fb.group({
    /*validación de campos del Formulario Registro*/
    Nombre:['', [Validators.required]],
    Apeliido:['', [Validators.required]],
    Correo:['', [Validators.required,Validators.email]],
    Password:['', [Validators.required,Validators.minLength(6)]],
  })
  }

  OnSubmit(){

    if(this.registroForm.valid){
      console.log(this.registroForm.value);
    }

  }
}
