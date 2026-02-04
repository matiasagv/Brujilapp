import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibroSombrasPage } from './libro-sombras.page';

describe('LibroSombrasPage', () => {
  let component: LibroSombrasPage;
  let fixture: ComponentFixture<LibroSombrasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroSombrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
