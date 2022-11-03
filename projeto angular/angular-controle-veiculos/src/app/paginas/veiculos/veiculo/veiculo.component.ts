import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  
  nomeTela = "DADOS DO VEÍCULO";
  nomeAcao = "VERIFICAR PROXIMO VEÍCULO"
  constructor() { }

  ngOnInit(): void {
  }

}
