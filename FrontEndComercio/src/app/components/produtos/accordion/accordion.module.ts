import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { CardsComponent } from '../cards/cards.component';



@NgModule({
  declarations: [AccordionComponent, CardsComponent],
  imports: [
    CommonModule
  ]
})
export class AccordionModule { }
