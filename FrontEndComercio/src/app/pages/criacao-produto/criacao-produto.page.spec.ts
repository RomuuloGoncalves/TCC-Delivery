import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriacaoProdutoPage } from './criacao-produto.page';

describe('CriacaoProdutoPage', () => {
  let component: CriacaoProdutoPage;
  let fixture: ComponentFixture<CriacaoProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriacaoProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
