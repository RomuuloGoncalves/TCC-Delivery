import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriacaoBebidasPage } from './criacao-bebidas.page';

describe('CriacaoBebidasPage', () => {
  let component: CriacaoBebidasPage;
  let fixture: ComponentFixture<CriacaoBebidasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriacaoBebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
