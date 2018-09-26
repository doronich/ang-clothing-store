import { NgModule } from '@angular/core';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from '../core/core.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule } from "@angular/material";
import { AuthGuard } from './services/auth.guard';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/effects';
import { reducers } from './reducers'
import { TokenService, AuthService } from './services';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
    MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule
  ],
  providers: [AuthGuard, TokenService, AuthService],
  declarations: [LoginComponent, RegisterComponent, LoginFormComponent]
})
export class AuthModule { }
