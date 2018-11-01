import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  /* { path: '**', component: HomeComponent }, */
  { path: '', component: HomeComponent, pathMatch: 'full' },
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
