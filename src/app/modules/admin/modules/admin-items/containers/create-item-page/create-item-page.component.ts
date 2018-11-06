import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/modules/items/services/category.service';
import { AdminItemsService } from '../../services';
import { EditItem } from '../../models';
import { Category, SubCategory } from 'src/app/modules/items/models';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-item-page',
  templateUrl: './create-item-page.component.html',
  styleUrls: ['./create-item-page.component.css']
})
export class CreateItemPageComponent implements OnInit {

  data: EditItem = null;
  categories: Category[] = [];
  subCategories: SubCategory[] = [];

  constructor(private categoryService: CategoryService,
    private adminItemsService: AdminItemsService) { }

  ngOnInit() {
    this.categoryService.getCategories().pipe(
      tap((data) => {
        this.categories = data;
      })
    ).subscribe();

    this.categoryService.getSubCategories().pipe(
      tap((subs) => {
        this.subCategories = subs;
      })
    ).subscribe();
  }

  create(data: EditItem) {
    this.adminItemsService.createItem(data).subscribe();
  }

}
