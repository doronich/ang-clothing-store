import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { ProfilePasswordComponent } from './components/profile-password/profile-password.component';
import { ProfileOrdersComponent } from './components/profile-orders/profile-orders.component';
import { UserDataService } from './services';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  declarations: [ProfilePageComponent, ProfileDataComponent, ProfilePasswordComponent, ProfileOrdersComponent],
  providers: [UserDataService]
})
export class ProfileModule { }
