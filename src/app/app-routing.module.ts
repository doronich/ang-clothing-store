import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomePageComponent } from './modules/home/containers/home-page/home-page.component';

const routes: Routes = [
  /* { path: '**', component: HomeComponent }, */
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  {
    path: '**', redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
