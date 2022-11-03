import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.component.html',
  styleUrls: ['./novo-veiculo.component.css']
})
export class NovoVeiculoComponent implements OnInit {
  nomeTela = "NOVO VEÍCULO";
  nomeAcao = "NOVO CADASTRO";
  constructor() { }

  ngOnInit(): void {
  }

}
