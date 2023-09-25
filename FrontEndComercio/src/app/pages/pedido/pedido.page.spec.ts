import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoPage } from './pedido.page';

describe('PedidoPage', () => {
  let component: PedidoPage;
  let fixture: ComponentFixture<PedidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
