import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { PuantajRoutingModule } from './puantaj-routing.module';
import { PuantajdashboardComponent } from './puantajdashboard/puantajdashboard.component';


@NgModule({
  declarations: [
    PuantajdashboardComponent
  ],
  imports: [
    CommonModule,
    PuantajRoutingModule,
    AgGridModule
  ]
})
export class PuantajModule { }
