import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogedInGuard } from './core/auths/loged-in.guard';
import { RedirectGuard } from './core/auths/redirect.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [RedirectGuard]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'cupons',
    loadChildren: () => import('./pages/cupons/cupons.module').then( m => m.CuponsPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'criacao-cupons',
    loadChildren: () => import('./pages/criacao-cupons/criacao-cupons.module').then( m => m.CriacaoCuponsPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pages/pedidos/pedidos.module').then( m => m.PedidosPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'criacao-variacoes/:id',
    loadChildren: () => import('./pages/criacao-variacoes/criacao-variacoes.module').then( m => m.CriacaoVariacoesPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'criacao-comidas',
    loadChildren: () => import('./pages/criacao-comidas/criacao-comidas.module').then( m => m.CriacaoComidasPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'pedido/:id',
    loadChildren: () => import('./pages/pedido/pedido.module').then( m => m.PedidoPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'editar-cupom/:id',
    loadChildren: () => import('./pages/editar-cupom/editar-cupom.module').then( m => m.EditarCupomPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'criacao-grupo-var/:id',
    loadChildren: () => import('./pages/criacao-grupo-var/criacao-grupo-var.module').then( m => m.CriacaoGrupoVarPageModule)
  },
  {
    path: 'criacao-produto',
    loadChildren: () => import('./pages/criacao-produto/criacao-produto.module').then( m => m.CriacaoProdutoPageModule)
  },
  {
    path: 'criacao-categoria',
    loadChildren: () => import('./pages/criacao-categoria/criacao-categoria.module').then( m => m.CriacaoCategoriaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
