import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriacaoCategoriaPage } from './criacao-categoria.page';

describe('CriacaoCategoriaPage', () => {
  let component: CriacaoCategoriaPage;
  let fixture: ComponentFixture<CriacaoCategoriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriacaoCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
