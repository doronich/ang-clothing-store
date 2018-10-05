import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrdersPageComponent } from './all-orders-page.component';

describe('AllOrdersPageComponent', () => {
  let component: AllOrdersPageComponent;
  let fixture: ComponentFixture<AllOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOrdersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
