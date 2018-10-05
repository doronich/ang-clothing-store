import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, CodeService } from './services';
import { AllOrdersPageComponent } from './containers/all-orders-page/all-orders-page.component';
import { AllOrdersTableComponent } from './components/all-orders-table/all-orders-table.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from "./reducers";
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './effects/order.effects';
import { MaterialModule } from 'src/app/modules/material';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { OrderPageComponent } from './containers/order-page/order-page.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';
import { OrderItemsListComponent } from './components/order-items-list/order-items-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderListItemComponent } from './components/order-list-item/order-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrdersRoutingModule,
    MaterialModule,
    StoreModule.forFeature('orders', reducers),
    EffectsModule.forFeature([OrderEffects]),
    NgxDatatableModule
  ],
  providers: [OrderService, CodeService],
  declarations: [AllOrdersPageComponent, AllOrdersTableComponent, OrderPageComponent, OrderInfoComponent, OrderItemsListComponent, OrderListItemComponent]
})
export class OrdersModule { }
