import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsPageComponent } from './containers/items-page/items-page.component';
import { ItemService } from './services';
import { FiltersComponent } from './components/filters/filters.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { FavItemComponent } from './components/fav-item/fav-item.component';
import { MaterialModule } from '../material';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './effects/item.effects';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CategoryService } from './services/category.service';
import { ItemPageComponent } from './containers/item-page/item-page.component';
import { CurrentItemComponent } from './components/current-item/current-item.component';
import { SlideshowModule } from 'ng-simple-slideshow'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ItemsRoutingModule,
    MaterialModule,
    StoreModule.forFeature('items', reducers),
    EffectsModule.forFeature([ItemEffects]),
    SlideshowModule
  ],
  declarations: [ItemsPageComponent, FiltersComponent, ItemsComponent, ItemComponent, FavItemComponent, PaginationComponent, ItemPageComponent, CurrentItemComponent],
  providers: [ItemService, CategoryService]
})
export class ItemsModule { }
