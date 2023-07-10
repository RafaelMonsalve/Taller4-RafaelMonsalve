import { Injectable } from '@angular/core';
/*hace llamados a la apis*/
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/Environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private ApiUrl=environment.apiUrl;

 httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + environment.TokenApi
  })
};

  constructor(
    private http: HttpClient
    ) { }

    ObtenerEstudiantes():Observable<any>{
      return this.http.get(this.ApiUrl+'estudiantes', this.httpOption);
    }
    RegistrarEstudiantes(estudiante:any):Observable<any>{
      return this.http.post(this.ApiUrl+'estudiantes', estudiante, this.httpOption);
    }
    EditarEstudiantes(id:number): Observable<any>{
      return this.http.get(this.ApiUrl +'estudiantes/'+id,this.httpOption);
    }
    ActualizarEstudiante(id:number, estudiante:any):Observable<any>{
      return this.http.put(this.ApiUrl + 'estudiantes/' + id, estudiante, this.httpOption);
    }
}
