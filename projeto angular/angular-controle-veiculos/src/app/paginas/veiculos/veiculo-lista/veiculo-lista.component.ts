import { Component, OnInit } from '@angular/core';

interface Country {
	id?: number;
	cliente: string;
	marca: string;
	modelo: string;
	ano: number;
	status:boolean;
}

const COUNTRIES: Country[] = [
	{
		cliente: 'Russia',
		marca: 'Volks',
		modelo: 'Gol',
		ano: 1990,
		status: true
	},
	{
		cliente: 'France',
		marca: 'Volks',
		modelo: 'Polo',
		ano: 1990,
		status: true
	},
	{
		cliente: 'Germany',
		marca: 'Volks',
		modelo: 'Pickup',
		ano: 1990,
		status: true
	},
	{
		cliente: 'Portugal',
		marca: 'Volks',
		modelo: 'Virtus',
		ano: 1990,
		status: true
	},
	{
		cliente: 'Canada',
		marca: 'Volks',
		modelo: 'Fusca',
		ano: 1990,
		status: true
	},
	{
		cliente: 'Vietnam',
		marca: 'Volks',
		modelo: 'Golf',
		ano: 1990,
		status: true
	},
	{
		cliente: 'Brazil',
		marca: 'Chevro',
		modelo: 'Vectra',
		ano: 1990,
		status: true
	},
	{
		cliente: 'Mexico',
		marca: 'Chevro',
		modelo: 'Opala',
		ano: 1990,
		status: true
	},
	{
		cliente: 'United States',
		marca: 'Chevro',
		modelo: 'Cobalt',
		ano: 1990,
		status: true
	},
	{
		cliente: 'India',
		marca: 'Chevro',
		modelo: 'Elgo',
		ano: 1990,
		status: true
	},
	{
		cliente: 'Indonesia',
		marca: 'Chevro',
		modelo: 'Pleno',
		ano: 1990,
		status: true
	},
	{
		cliente: 'Tuvalu',
		marca: 'Chevro',
		modelo: 'Ultra',
		ano: 1990,
		status: true
	},
	{
		cliente: 'China',
		marca: 'Fiat',
		modelo: '147',
		ano: 1990,
		status: true
	},
];

@Component({
  selector: 'app-veiculo-lista',
  templateUrl: './veiculo-lista.component.html',
  styleUrls: ['./veiculo-lista.component.css']
})
export class VeiculoListaComponent implements OnInit {
  	page = 1;
	pageSize = 4;
	collectionSize = COUNTRIES.length;
	countries!: Country[];
	nomeTela = "LISTA DE VEÍCULOS";
	nomeAcao = "NOVO CADASTRO";

  constructor() { }

  ngOnInit(): void {
    this.refreshCountries();
  }

  refreshCountries() {
		this.countries = COUNTRIES.map((country, i) => ({ id: Math.random() + i, ...country })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

}
