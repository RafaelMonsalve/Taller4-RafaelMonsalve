import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validator,FormGroup, Validators } from '@angular/forms';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm!: FormGroup;

    tiposIdentificacion=[
      {value:1, viewValue: 'cedula de ciudadania'},
      {value:2, viewValue: 'Tarjeta de Identidad'},
      {value:3, viewValue: 'Pasaporte'}
    ];

  constructor(
    private estudiantesService: EstudiantesService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegistroComponent>){}

  ngOnInit(): void {
    this.registroForm =this.fb.group({
      tipoIdentificacion:['',[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
      numeroIdentificacion:['',[Validators.required,Validators.minLength(7),Validators.maxLength(10),Validators.pattern('^[0-9]*$')]],
      nombres:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z- -]*$')]],
      apellidos:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z- -]*$')]],
      correo:['',[Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9_,.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-,]*$')]],
      celular:['',[Validators.required,Validators.minLength(7),Validators.maxLength(10),Validators.pattern('^[0-9]*$')]],
      linkedin:['',[Validators.required,Validators.minLength(10),Validators.maxLength(100),Validators.pattern('^https://www.linkedin.com/in/[a-zA-Z0-9_,+-/]*$')]],
      github:['',[Validators.required,Validators.minLength(10),Validators.maxLength(100),Validators.pattern('^https://github.com/[a-zA-Z0-9_,+-]*$')]]
  })
  }
    onSubmit(){
        const estudiante ={
          tipoIdentificacion:Number(this.registroForm.value.tipoIdentificacion),
          numeroIdentificacion:Number(this.registroForm.value.numeroIdentificacion),
          nombres:this.registroForm.value.nombres,
          apellidos:this.registroForm.value.apellidos,
          celular:Number(this.registroForm.value.celular),
          correo:this.registroForm.value.correo,
          linkedin:this.registroForm.value.linkedin,
          github:this.registroForm.value.github
        }
        if(this.registroForm.valid){
        this.estudiantesService.RegistrarEstudiantes(estudiante).subscribe({
        next:(response:any)=>{
          alert("Estudiante registrado correctamente")
          this.dialogRef.close();
        },error:(error)=>{
          if(error.error?.message instanceof Array){
            let errorMessage='';
            error.error.message.forEach((err:any, index: number)=>{
              errorMessage +='${index+1}.${err}\n'
          });
            alert(errorMessage);
          }else{
            alert('error desconocido');
        }
      }
    });
      }else{
        this.registroForm.markAllAsTouched();
      }
    }
  }


