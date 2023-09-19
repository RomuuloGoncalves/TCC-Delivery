import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'cupons',
    loadChildren: () => import('./pages/cupons/cupons.module').then( m => m.CuponsPageModule)
  },
  {
    path: 'detalhe-pedido',
    loadChildren: () => import('./pages/detalhe-pedido/detalhe-pedido.module').then( m => m.DetalhePedidoPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'criacao-produtos',
    loadChildren: () => import('./pages/criacao-produtos/criacao-produtos.module').then( m => m.CriacaoProdutosPageModule)
  },
  {
    path: 'criacao-cupons',
    loadChildren: () => import('./pages/criacao-cupons/criacao-cupons.module').then( m => m.CriacaoCuponsPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pages/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'criacao-variacoes',
    loadChildren: () => import('./pages/criacao-variacoes/criacao-variacoes.module').then( m => m.CriacaoVariacoesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
