import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessaoCardsProdutoComponent } from './sessao-cards-produto.component';

describe('SessaoCardsProdutoComponent', () => {
  let component: SessaoCardsProdutoComponent;
  let fixture: ComponentFixture<SessaoCardsProdutoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoCardsProdutoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessaoCardsProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
