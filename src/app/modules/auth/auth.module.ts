import { NgModule } from '@angular/core';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from '../core/core.module';

import { AuthGuard } from './services/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/effects';
import { reducers } from './reducers'
import { TokenService, AuthService } from './services';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AdminGuard } from './services/guards/admin.guard';
import { MaterialModule } from '../material';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    MaterialModule,
    AuthRoutingModule,
    TranslateModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthGuard, TokenService, AuthService, AdminGuard],
  declarations: [LoginComponent, RegisterComponent, LoginFormComponent, RegFormComponent]
})
export class AuthModule { }
