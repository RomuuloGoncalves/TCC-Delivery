import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermosUsoPage } from './termos-uso.page';

describe('TermosUsoPage', () => {
  let component: TermosUsoPage;
  let fixture: ComponentFixture<TermosUsoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TermosUsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
