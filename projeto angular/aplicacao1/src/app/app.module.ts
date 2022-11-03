import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MensagensComponent } from './pages/mensagens/mensagens.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Interceptor } from './interceptor/Interceptor';
import { TesteComponent } from './pages/teste/teste.component';

const serviceAutentica = [Interceptor]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MensagensComponent,
    NavbarComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    serviceAutentica,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
