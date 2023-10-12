import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceiroPage } from './financeiro.page';

describe('FinanceiroPage', () => {
  let component: FinanceiroPage;
  let fixture: ComponentFixture<FinanceiroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinanceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
