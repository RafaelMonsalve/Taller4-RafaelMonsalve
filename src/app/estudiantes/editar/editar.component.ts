import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  editForm!:FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private EstudiantesService:EstudiantesService,
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<EditarComponent>
  ){
    this.editForm = this.formBuilder.group({
      id:[''],
      nombres:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z- -]*$')]],
      apellidos:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z- -]*$')]],
      correo:['',[Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9_,.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-,]*$')]],
      celular:['',[Validators.required,Validators.minLength(7),Validators.maxLength(10),Validators.pattern('^[0-9]*$')]],
      linkedin:['',[Validators.required,Validators.minLength(10),Validators.maxLength(100),Validators.pattern('^https://www.linkedin.com/in/[a-zA-Z0-9_,+-/]*$')]],
      github:['',[Validators.required,Validators.minLength(10),Validators.maxLength(100),Validators.pattern('^https://github.com/[a-zA-Z0-9_,+-]*$')]]

    })
  }

  ngOnInit(): void{
    const id=this.data.estudiante;
    this.EstudiantesService.EditarEstudiantes(id).subscribe({
      next: (response:any)=>{
        console.log(response)
        const estudianteData=response.data[0];
        this.editForm.setValue({
          id:estudianteData.estudiante_id,
          nombres:estudianteData.estudiante_nombres,
          apellidos:estudianteData.estudiante_apellidos,
          celular:estudianteData.estudiante_celular,
          correo:estudianteData.estudiante_correo,
          linkedin:estudianteData.estudiante_linkedin,
          github:estudianteData.estudiante_github
        })
      },
      error:(error)=>{
        console.log(error)
      }
    });
  }
  onSubmit():void{
    if(this.editForm.valid){
      const estudiante ={
        nombres:this.editForm.value.nombres,
        apellidos:this.editForm.value.apellidos,
        celular:Number(this.editForm.value.celular),
        correo:this.editForm.value.correo,
        linkedin:this.editForm.value.linkedin,
        github:this.editForm.value.github,
      }
      this.EstudiantesService.ActualizarEstudiante(this.editForm.value.id,estudiante).subscribe({
        next:(response:any)=>{
          alert('Estudiante actualizado');
          this.dialogRef.close();
        },error:(erro)=>{
          console.log(erro)
        }
      })
    }
  }
}
