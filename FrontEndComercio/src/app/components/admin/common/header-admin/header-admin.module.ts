import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderAdminComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports:[HeaderAdminComponent]
})
export class HeaderAdminModule { }
