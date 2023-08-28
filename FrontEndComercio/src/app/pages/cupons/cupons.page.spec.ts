import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuponsPage } from './cupons.page';

describe('CuponsPage', () => {
  let component: CuponsPage;
  let fixture: ComponentFixture<CuponsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
