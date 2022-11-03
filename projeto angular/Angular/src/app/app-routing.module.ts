import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  // {
  //   path: "",
  //   pathMatch: "full",
  //   redirectTo: "lista"
  // },
  {
    path: "lista", component: TableComponent
  },
  {
    path: "cadastro", component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
