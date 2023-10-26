import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdisplayComponent } from './productdisplay.component';

describe('ProductdisplayComponent', () => {
  let component: ProductdisplayComponent;
  let fixture: ComponentFixture<ProductdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdisplayComponent]
    });
    fixture = TestBed.createComponent(ProductdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
