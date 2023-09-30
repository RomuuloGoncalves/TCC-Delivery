import { Component, OnInit } from '@angular/core';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {
  constructor(private Admin: AdminService,) { }

  cupons!: Cupom[]

  ngOnInit() {
    this.recuperarTodosCupons()
  }

  recuperarTodosCupons() {
    this.Admin.pegarCupons().subscribe(
      (response) => {
        this.cupons = response
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
