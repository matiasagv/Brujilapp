import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaNatalPage } from './carta-natal.page';

describe('CartaNatalPage', () => {
  let component: CartaNatalPage;
  let fixture: ComponentFixture<CartaNatalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaNatalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
