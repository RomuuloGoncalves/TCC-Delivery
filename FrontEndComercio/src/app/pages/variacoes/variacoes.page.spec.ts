import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VariacoesPage } from './variacoes.page';

describe('VariacoesPage', () => {
  let component: VariacoesPage;
  let fixture: ComponentFixture<VariacoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VariacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
