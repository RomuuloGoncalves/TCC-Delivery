import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriacaoProdutosPage } from './criacao-produtos.page';

describe('CriacaoProdutosPage', () => {
  let component: CriacaoProdutosPage;
  let fixture: ComponentFixture<CriacaoProdutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriacaoProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
