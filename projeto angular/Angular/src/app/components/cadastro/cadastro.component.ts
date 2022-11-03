import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  nomeTela = "CADASTRO DE VEÍCULOS";
  rowHeight = 80;

  constructor() { }

  ngOnInit(): void {
  }

}
