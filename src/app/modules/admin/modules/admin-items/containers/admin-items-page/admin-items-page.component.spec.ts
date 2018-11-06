import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemsPageComponent } from './admin-items-page.component';

describe('AdminItemsPageComponent', () => {
  let component: AdminItemsPageComponent;
  let fixture: ComponentFixture<AdminItemsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminItemsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
