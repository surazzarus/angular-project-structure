import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { ShowsTableComponent } from './components/shows-table/shows-table.component';
import { PlaylistService } from "./services/playlist.service";
import { PlaylistComponent } from './playlist.component';


@NgModule({
  declarations: [ShowsTableComponent, PlaylistComponent],
  providers: [PlaylistService],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
