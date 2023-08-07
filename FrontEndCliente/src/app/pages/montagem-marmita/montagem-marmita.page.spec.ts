import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MontagemMarmitaPage } from './montagem-marmita.page';

describe('MontagemMarmitaPage', () => {
  let component: MontagemMarmitaPage;
  let fixture: ComponentFixture<MontagemMarmitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MontagemMarmitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
