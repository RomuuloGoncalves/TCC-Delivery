import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngredienteSelecionadoComponent } from './ingrediente-selecionado.component';

describe('IngredienteSelecionadoComponent', () => {
  let component: IngredienteSelecionadoComponent;
  let fixture: ComponentFixture<IngredienteSelecionadoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredienteSelecionadoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredienteSelecionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
