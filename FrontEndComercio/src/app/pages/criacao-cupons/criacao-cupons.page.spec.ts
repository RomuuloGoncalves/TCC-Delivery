import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriacaoCuponsPage } from './criacao-cupons.page';

describe('CriacaoCuponsPage', () => {
  let component: CriacaoCuponsPage;
  let fixture: ComponentFixture<CriacaoCuponsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriacaoCuponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
