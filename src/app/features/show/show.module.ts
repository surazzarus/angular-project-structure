import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ClipsTableComponent } from './components/clips-table/clips-table.component';
import { ShowService } from "./services/show.service";
import { ShowComponent } from './show.component';


@NgModule({
  declarations: [ClipsTableComponent, ShowComponent],
  providers: [ShowService],
  imports: [
    CommonModule,
    ShowRoutingModule
  ]
})
export class ShowModule { }
