import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './content-layout/sidebar/sidebar.component';
import { NavbarComponent } from './content-layout/navbar/navbar.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, ContentLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
