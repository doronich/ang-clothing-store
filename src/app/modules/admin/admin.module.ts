import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AdminItemsModule } from './modules/admin-items/admin-items.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    OrdersModule,
    AdminItemsModule,
    TranslateModule
  ],
  declarations: [AdminPageComponent]
})
export class AdminModule { }
