import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { CardsModule } from '../cards/cards.module';



@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports:[AccordionModule, CardsModule]
})
export class AccordionModule { }
