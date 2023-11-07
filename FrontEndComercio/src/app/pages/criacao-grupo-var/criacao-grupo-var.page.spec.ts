import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriacaoGrupoVarPage } from './criacao-grupo-var.page';

describe('CriacaoGrupoVarPage', () => {
  let component: CriacaoGrupoVarPage;
  let fixture: ComponentFixture<CriacaoGrupoVarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriacaoGrupoVarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
