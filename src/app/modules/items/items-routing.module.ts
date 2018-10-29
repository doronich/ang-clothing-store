import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsPageComponent } from './containers/items-page/items-page.component';
import { ItemPageComponent } from './containers/item-page/item-page.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsPageComponent
  },
  {
    path: 'items/:id',
    component: ItemPageComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
