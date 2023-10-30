import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ComoAyudarComponent } from './pages/como-ayudar/como-ayudar.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NormativasComponent } from './pages/normativas/normativas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path: 'como-ayudar',
    component: ComoAyudarComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'normativas',
    component: NormativasComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
