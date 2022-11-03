import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoVeiculoComponent } from './paginas/veiculos/novo-veiculo/novo-veiculo.component';
import { VeiculoListaComponent } from './paginas/veiculos/veiculo-lista/veiculo-lista.component';
import { VeiculoComponent } from './paginas/veiculos/veiculo/veiculo.component';

const routes: Routes = [
  {path: "lista-veiculos", component: VeiculoListaComponent},
  {path: "veiculos", component: VeiculoComponent},
  {path: "novo-veiculo", component: NovoVeiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
