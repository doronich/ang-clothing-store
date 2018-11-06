import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modules/shared/layout/header/header.component';
import { FooterComponent } from './modules/shared/layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './modules/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './reducers'
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { ItemsModule } from './modules/items/items.module';
import { MaterialModule } from './modules/material';
import { ProfileModule } from './modules/profile/profile.module';
import { AdminModule } from './modules/admin/admin.module';
import { ChatContainerComponent } from './modules/chat/contaners/chat-container/chat-container.component';
import { ChatComponent } from './modules/chat/components/chat/chat.component';
import { ChatHeaderComponent } from './modules/chat/components/chat-header/chat-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './modules/home/containers/home-page/home-page.component';
import { HomeCarouselComponent } from './modules/home/components/home-carousel/home-carousel.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';


export function CreateTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatContainerComponent,
    ChatComponent,
    ChatHeaderComponent,
    HomePageComponent,
    HomeCarouselComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (CreateTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    MaterialModule,
    ItemsModule,
    ProfileModule,
    AdminModule,
    AppRoutingModule,
    SlideshowModule,
    StoreModule.forRoot(reducers, { metaReducers }),

    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Store DevTools',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    CoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
