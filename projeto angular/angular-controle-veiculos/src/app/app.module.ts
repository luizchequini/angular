import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { VeiculoListaComponent } from './paginas/veiculos/veiculo-lista/veiculo-lista.component';
import { VeiculoComponent } from './paginas/veiculos/veiculo/veiculo.component';
import { CardComponent } from './componentes/card/card.component';
import { NovoVeiculoComponent } from './paginas/veiculos/novo-veiculo/novo-veiculo.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VeiculoListaComponent,
    VeiculoComponent,
    CardComponent,
    NovoVeiculoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
