import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarVariacaoPage } from './editar-variacao.page';

describe('EditarVariacaoPage', () => {
  let component: EditarVariacaoPage;
  let fixture: ComponentFixture<EditarVariacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarVariacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
