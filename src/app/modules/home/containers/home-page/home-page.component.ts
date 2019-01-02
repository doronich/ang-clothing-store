import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/modules/items/services';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  images = [];

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.itemService.getRandomItems().pipe(
      tap(items => {
        if (items.length > 0)
          this.images = items.map(i => new Object({
            url: i.image,
            caption: i.name,
            clickAction: () => {
              this.router.navigate(['items', i.id])
            }
          }));
      })
    ).subscribe()
  }

}
