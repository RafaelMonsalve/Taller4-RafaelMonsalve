import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContainerRoutingModule } from './main-container-routing.module';
import { TemplateComponent } from './template/template.component';
import {MatToolbarModule} from  '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { EstudiantesModule } from '../estudiantes/estudiantes.module';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    MainContainerRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    EstudiantesModule
  ]
})
export class MainContainerModule { }
