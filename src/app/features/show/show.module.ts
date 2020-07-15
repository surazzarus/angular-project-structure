import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ClipsTableComponent } from './components/clips-table/clips-table.component';


@NgModule({
  declarations: [ClipsTableComponent],
  imports: [
    CommonModule,
    ShowRoutingModule
  ]
})
export class ShowModule { }
