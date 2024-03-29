import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogedInGuard } from './core/auths/loged-in.guard';
import { RedirectGuard } from './core/auths/redirect.guard';

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
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [RedirectGuard]
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule),
    canActivate: [RedirectGuard]
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./pages/carrinho/carrinho.module').then( m => m.CarrinhoPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'montagem-marmita',
    loadChildren: () => import('./pages/montagem-marmita/montagem-marmita.module').then( m => m.MontagemMarmitaPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [LogedInGuard]
  },
  {
    path: 'privacidade',
    loadChildren: () => import('./pages/privacidade/privacidade.module').then( m => m.PrivacidadePageModule)
  },
  {
    path: 'termos-uso',
    loadChildren: () => import('./pages/termos-uso/termos-uso.module').then( m => m.TermosUsoPageModule)
  },
  {
    path: 'cookies',
    loadChildren: () => import('./pages/cookies/cookies.module').then( m => m.CookiesPageModule)
  },
  {
    path: 'listagem/:produto',
    loadChildren: () => import('./pages/listagem/listagem.module').then( m => m.ListagemPageModule),
    canActivate: [LogedInGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
