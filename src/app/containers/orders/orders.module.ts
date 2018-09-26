import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllordersComponent } from './alloreders/allorders/allorders.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [AllordersComponent]
})
export class OrdersModule { }
