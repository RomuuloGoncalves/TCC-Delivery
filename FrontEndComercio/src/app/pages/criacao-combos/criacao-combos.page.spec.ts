import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriacaoCombosPage } from './criacao-combos.page';

describe('CriacaoCombosPage', () => {
  let component: CriacaoCombosPage;
  let fixture: ComponentFixture<CriacaoCombosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriacaoCombosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
