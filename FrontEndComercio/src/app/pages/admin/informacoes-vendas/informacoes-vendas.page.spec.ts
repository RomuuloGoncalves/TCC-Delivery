import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacoesVendasPage } from './informacoes-vendas.page';

describe('InformacoesVendasPage', () => {
  let component: InformacoesVendasPage;
  let fixture: ComponentFixture<InformacoesVendasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformacoesVendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
