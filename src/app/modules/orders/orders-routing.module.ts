import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersPageComponent, OrderPageComponent } from './containers';
import { AdminGuard } from '../auth/services';

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
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class OrdersRoutingModule { }
