import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxaCancelamentoPage } from './taxa-cancelamento.page';

describe('TaxaCancelamentoPage', () => {
  let component: TaxaCancelamentoPage;
  let fixture: ComponentFixture<TaxaCancelamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TaxaCancelamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
