import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensagensComponent } from './pages/mensagens/mensagens.component';
import { TesteComponent } from './pages/teste/teste.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "mensagens", component: MensagensComponent
  },
  {
    path: "teste", component: TesteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
