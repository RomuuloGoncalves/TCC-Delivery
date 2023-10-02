import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCupomPage } from './editar-cupom.page';

describe('EditarCupomPage', () => {
  let component: EditarCupomPage;
  let fixture: ComponentFixture<EditarCupomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarCupomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
