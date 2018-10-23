import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersPageComponent, OrderPageComponent } from './containers';
import { AdminGuard, AuthGuard } from '../auth/services';
import { CreateOrderPageComponent } from './containers/create-order-page/create-order-page.component';

const routes: Routes = [
  {
    path: "orders",
    component: AllOrdersPageComponent,
    canActivate: [AdminGuard],
    children: []
  },
  {
    path: 'orders/:id',
    component: OrderPageComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'cart',
    component: CreateOrderPageComponent,
    canActivate: [AuthGuard]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class OrdersRoutingModule { }
