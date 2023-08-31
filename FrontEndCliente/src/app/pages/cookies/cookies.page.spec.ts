import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookiesPage } from './cookies.page';

describe('CookiesPage', () => {
  let component: CookiesPage;
  let fixture: ComponentFixture<CookiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CookiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
