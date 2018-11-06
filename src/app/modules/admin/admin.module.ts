import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { OrdersModule } from './modules/orders/orders.module';
import { SomeComponent } from './components/some/some.component';
import { AdminItemsModule } from './modules/admin-items/admin-items.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    OrdersModule,
    AdminItemsModule,
  ],
  declarations: [AdminPageComponent, SomeComponent]
})
export class AdminModule { }
