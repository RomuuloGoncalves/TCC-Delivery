import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriacaoVariacoesPage } from './criacao-variacoes.page';

describe('CriacaoVariacoesPage', () => {
  let component: CriacaoVariacoesPage;
  let fixture: ComponentFixture<CriacaoVariacoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriacaoVariacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
