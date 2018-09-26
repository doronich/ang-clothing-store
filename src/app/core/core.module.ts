import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpTokenInterceptor, UnauthorizeInterceptor } from "./interceptoprs";
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from './services/api.service';
import { OrderService } from './services/order.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizeInterceptor, multi: true },
    ApiService,
    OrderService
  ],
  declarations: []
})
export class CoreModule { }
