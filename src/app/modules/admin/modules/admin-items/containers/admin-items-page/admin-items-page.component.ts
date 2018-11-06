import { Component, OnInit } from '@angular/core';
import { AdminItemsService } from '../../services';
import { map, tap, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { ItemForAdmin } from '../../models';

@Component({
  selector: 'app-admin-items-page',
  templateUrl: './admin-items-page.component.html',
  styleUrls: ['./admin-items-page.component.css']
})
export class AdminItemsPageComponent implements OnInit {

  items: ItemForAdmin[] = []
  error: any = null;
  constructor(private adminItemsService: AdminItemsService) { }

  ngOnInit() {
    this.adminItemsService.getAll().pipe(
      tap(items => {
        this.items = items;
      }),
      catchError(err => {
        this.error = "Error while loading items."
        return of(console.log(err))
      })
    ).subscribe()
  }

  deleteItem(id: number) {
    this.adminItemsService.deleteItem(id).pipe(
      tap(() => {
        this.items = this.items.filter(i => i.id !== id)
      }),
      catchError(err => {
        this.error = "Error while removing item."
        return of(console.log(err))
      }),
      delay(3000),
      tap(() => {
        this.error = null;
      }),
    ).subscribe();
  }

}
