import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminItemsPageComponent } from './containers/admin-items-page/admin-items-page.component';
import { MaterialModule } from 'src/app/modules/material';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { RouterModule } from '@angular/router';
import { AdminItemsService } from './services';
import { EditItemPageComponent } from './containers/edit-item-page/edit-item-page.component';
import { CreateItemPageComponent } from './containers/create-item-page/create-item-page.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
  providers: [AdminItemsService],
  declarations: [AdminItemsPageComponent, ItemsTableComponent, EditItemPageComponent, CreateItemPageComponent, EditItemComponent]
})
export class AdminItemsModule { }
