import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemPagePage } from './listagem-page.page';

describe('ListagemPagePage', () => {
  let component: ListagemPagePage;
  let fixture: ComponentFixture<ListagemPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
