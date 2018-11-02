import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../auth/services';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { OrderPageComponent, AllOrdersPageComponent } from './modules/orders/containers';
import { OrdersModule } from './modules/orders/orders.module';
import { SomeComponent } from './components/some/some.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'some',
        component: SomeComponent,
        outlet: 'admin'
      },
      {
        path: "orders",
        component: AllOrdersPageComponent,
        canActivate: [AdminGuard],
        outlet: 'admin'
      },
      {
        path: 'orders/:id',
        component: OrderPageComponent,
        canActivate: [AdminGuard],
        outlet: 'admin'
      },

    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    OrdersModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule { }
