import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() nomeTela: string = "";
  @Input() nomeAcao: string = "";
  @Input() enderecoTela: string = "";
  @Input() botao: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
