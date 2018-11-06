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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderListItemComponent } from './components/order-list-item/order-list-item.component';
import { CreateOrderPageComponent } from './containers/create-order-page/create-order-page.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserService } from './services/user.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrdersRoutingModule,
    MaterialModule,
    FormsModule,
    TranslateModule,
    StoreModule.forFeature('orders', reducers),
    EffectsModule.forFeature([OrderEffects]),
    NgxDatatableModule
  ],
  providers: [OrderService, CodeService, UserService],
  declarations: [AllOrdersPageComponent, AllOrdersTableComponent, OrderPageComponent, OrderInfoComponent, OrderItemsListComponent, OrderListItemComponent, CreateOrderPageComponent, ItemlistComponent, UserInfoComponent]
})
export class OrdersModule { }
