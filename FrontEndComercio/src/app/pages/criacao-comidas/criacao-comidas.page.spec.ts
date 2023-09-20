import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriacaoComidasPage } from './criacao-comidas.page';

describe('CriacaoComidasPage', () => {
  let component: CriacaoComidasPage;
  let fixture: ComponentFixture<CriacaoComidasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriacaoComidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
