import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarBebidaPage } from './editar-bebida.page';

describe('EditarBebidaPage', () => {
  let component: EditarBebidaPage;
  let fixture: ComponentFixture<EditarBebidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarBebidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
