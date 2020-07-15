import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpErrorInterceptor } from "./interceptors/http-error.interceptor";
import { AuthenticationService } from "./services/authentication.service";
import { EventBusService } from "./services/event-bus.service";
import { AuthGuard } from "./guard/auth.guard";
import { ApiService } from "./services/api.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    EventBusService,
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
