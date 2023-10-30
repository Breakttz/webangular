import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ComoAyudarComponent } from './pages/como-ayudar/como-ayudar.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NormativasComponent } from './pages/normativas/normativas.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    NoticiasComponent,
    ComoAyudarComponent,
    NosotrosComponent,
    NormativasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
