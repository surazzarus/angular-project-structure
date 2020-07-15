import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './content-layout/sidebar/sidebar.component';
import { NavbarComponent } from './content-layout/navbar/navbar.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { HomeComponent } from './content-layout/home/home.component';
import { AppRoutingModule } from "../app-routing.module";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, ContentLayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class LayoutsModule { }
