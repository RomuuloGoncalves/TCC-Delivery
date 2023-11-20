import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarGrupoVarPage } from './editar-grupo-var.page';

describe('EditarGrupoVarPage', () => {
  let component: EditarGrupoVarPage;
  let fixture: ComponentFixture<EditarGrupoVarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarGrupoVarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
