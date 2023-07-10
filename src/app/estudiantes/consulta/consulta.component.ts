import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RegistroComponent } from '../registro/registro.component';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit, AfterViewInit {
  estudiantes: any[] = [];
  displayedColumns: string[] = ['id','nombres', 'apellidos', 'celular', 'correo', 'linkedin','github', 'fechaCreacion','acciones'];
  dataSource = new MatTableDataSource<any>(this.estudiantes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private estudiantesService: EstudiantesService,
    public dialog:MatDialog
    ) { }

  ngOnInit(): void {
    this.estudiantesService.ObtenerEstudiantes().subscribe(
      (response: any) => {
        this.estudiantes = response.data;
        this.dataSource = new MatTableDataSource<any>(this.estudiantes);
        this.dataSource.paginator=this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  AbrirDialogoRegistro(){
    const dialogRef= this.dialog.open(RegistroComponent,{
      width:'500px',
      height: '600px'
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.estudiantesService.ObtenerEstudiantes().subscribe(
        (Response:any)=>{
          this.estudiantes=Response.data;
          this.dataSource= new MatTableDataSource<any>(this.estudiantes);
          this.dataSource.paginator  = this.paginator;
        },(error)=>{
          console.log(error);
        }
      )
  })
}
VerEstudiante(estudiante:number){

}
EditarEstudiante(estudiante:number){
const dialogRefEdit=this.dialog.open(EditarComponent,{
  width:'500px',
  data:{estudiante:estudiante}
});

dialogRefEdit.afterClosed().subscribe(result => {
  this.estudiantesService.ObtenerEstudiantes().subscribe({
    next:(Response:any)=>{
      this.estudiantes=Response.data;
      this.dataSource= new MatTableDataSource<any>(this.estudiantes);
      this.dataSource.paginator  = this.paginator;
    },error:(error)=>{
      console.log(error);
    }
})

})
}
InhabilitarEstudiante(estudiante:number){

}
}

