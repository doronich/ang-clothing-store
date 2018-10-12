import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsPageComponent } from './containers/items-page/items-page.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
