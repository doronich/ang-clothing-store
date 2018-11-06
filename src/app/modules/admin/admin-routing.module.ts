import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../auth/services';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { OrderPageComponent, AllOrdersPageComponent } from './modules/orders/containers';
import { OrdersModule } from './modules/orders/orders.module';
import { SomeComponent } from './components/some/some.component';
import { AdminItemsPageComponent } from './modules/admin-items/containers/admin-items-page/admin-items-page.component';
import { CreateItemPageComponent } from './modules/admin-items/containers/create-item-page/create-item-page.component';
import { EditItemPageComponent } from './modules/admin-items/containers/edit-item-page/edit-item-page.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AdminGuard],
    children: [
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
      {
        path: 'items',
        component: AdminItemsPageComponent,
        canActivate: [AdminGuard],
        outlet: 'admin'
      },
      {
        path: 'items/add',
        component: CreateItemPageComponent,
        canActivate: [AdminGuard], outlet: 'admin'
      },
      {
        path: 'items/edit/:id',
        component: EditItemPageComponent,
        canActivate: [AdminGuard], outlet: 'admin'
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule { }
