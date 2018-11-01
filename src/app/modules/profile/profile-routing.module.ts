import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import { AuthGuard } from '../auth/services';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard]
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
export class ProfileRoutingModule { }
