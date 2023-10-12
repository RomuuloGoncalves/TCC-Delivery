import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormasPagamentoPage } from './formas-pagamento.page';

describe('FormasPagamentoPage', () => {
  let component: FormasPagamentoPage;
  let fixture: ComponentFixture<FormasPagamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormasPagamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
