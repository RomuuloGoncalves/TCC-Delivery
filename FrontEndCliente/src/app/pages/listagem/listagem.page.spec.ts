import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemPage } from './listagem.page';

describe('ListagemPage', () => {
  let component: ListagemPage;
  let fixture: ComponentFixture<ListagemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
