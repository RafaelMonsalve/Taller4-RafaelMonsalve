import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './template/template.component';
import { PerfilComponent } from '../user-module/perfil/perfil.component';
import { AyudaComponent } from '../user-module/ayuda/ayuda.component';
import { MicuentaComponent } from '../user-module/micuenta/micuenta.component';
import { ConsultaComponent } from '../estudiantes/consulta/consulta.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children:[
      {path: 'perfil',component:PerfilComponent},
      {path: 'ayuda', component:AyudaComponent},
      { path: 'micuenta',component:MicuentaComponent},
      { path: 'consultar-estudiantes', component: ConsultaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContainerRoutingModule { }
