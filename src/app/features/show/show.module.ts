import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ClipsTableComponent } from './components/clips-table/clips-table.component';
import { ShowService } from "./services/show.service";


@NgModule({
  declarations: [ClipsTableComponent],
  providers: [ShowService],
  imports: [
    CommonModule,
    ShowRoutingModule
  ]
})
export class ShowModule { }
