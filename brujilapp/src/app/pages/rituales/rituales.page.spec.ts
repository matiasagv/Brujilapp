import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RitualesPage } from './rituales.page';

describe('RitualesPage', () => {
  let component: RitualesPage;
  let fixture: ComponentFixture<RitualesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RitualesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
