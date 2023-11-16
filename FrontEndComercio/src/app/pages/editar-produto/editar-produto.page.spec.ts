import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarProdutoPage } from './editar-produto.page';

describe('EditarProdutoPage', () => {
  let component: EditarProdutoPage;
  let fixture: ComponentFixture<EditarProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
