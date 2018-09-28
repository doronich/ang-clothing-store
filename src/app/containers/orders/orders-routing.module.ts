import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllordersComponent } from './alloreders/allorders/allorders.component';
import { AuthGuard, AdminGuard } from '../../auth/services';

const routes: Routes = [
  {
    path: 'orders',
    component: AllordersComponent,
    canActivate: [AuthGuard, AdminGuard]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class OrdersRoutingModule { }
