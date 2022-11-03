import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/service/mensagem.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent implements OnInit {

  constructor(
    private mensagemService: MensagemService,
    private router: Router
  ) { }

  mensagens!: any;
  mensagensCustomizada!: any;

  ngOnInit(): void {
    this.GetAll();
    //this.ListaMensagensCustomizada();
  }

  GetAll() {
    this.mensagemService.GetAll()
      .subscribe(mensagens => {
        this.mensagens = mensagens
      },
        error => {
          this.router.navigate(["/login"]);
        }
      )
  }

  ListaMensagensCustomizada() {
    this.mensagemService.ListaMensagensCustomizada()
      .subscribe(mensagensCustomizada => {
        this.mensagensCustomizada = mensagensCustomizada
      },
        error => {
          this.router.navigate(["/login"]);
        }
      )
  }
}
