import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from "./layouts/content-layout/content-layout.component";


const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'show',
        loadChildren: () => import('./features/show/show.module').then(m => m.ShowModule)
      },
      {
        path: 'playlist',
        loadChildren: () => import('./features/playlist/playlist.module').then(m => m.PlaylistModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
