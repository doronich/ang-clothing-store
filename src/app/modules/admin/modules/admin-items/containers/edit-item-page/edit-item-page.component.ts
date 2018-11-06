import { Component, OnInit } from '@angular/core';
import { AdminItemsService } from '../../services';
import { CategoryService } from 'src/app/modules/items/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { EditItem } from '../../models';
import { tap } from 'rxjs/operators';
import { SubCategory, Category } from 'src/app/modules/items/models';

@Component({
  selector: 'app-edit-item-page',
  templateUrl: './edit-item-page.component.html',
  styleUrls: ['./edit-item-page.component.css']
})
export class EditItemPageComponent implements OnInit {
  data: EditItem = null;
  categories: Category[] = [];
  subCategories: SubCategory[] = [];

  constructor(private categoryService: CategoryService,
    private adminItemsService: AdminItemsService, private route: ActivatedRoute) { }

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

    this.adminItemsService.getItem(this.route.snapshot.params['id']).pipe(
      tap(item => {
        this.data = {
          name: item.name,
          id: item.id,
          description: item.description,
          active: item.active,
          sex: item.sex,
          amount: item.amount,
          color: item.color,
          discount: item.discount,
          price: item.price,
          size: item.size,
          brand: item.brand,
          kind: item.categoryId,
          subkind: item.subCategoryId,
          previewImagePath: item.previewImagePath,
          imagePath1: item.imagePath1,
          imagePath2: item.imagePath2,
          imagePath3: item.imagePath3
        } as EditItem;
      }),
    ).subscribe();
  }

  update(data: EditItem) {
    this.adminItemsService.updateItem(data).subscribe();
  }

}
