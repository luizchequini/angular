import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensagemModel } from 'src/app/models/MensagemModel';
import { AutenticaService } from 'src/app/service/Autentica.service';
import { MensagemService } from 'src/app/service/mensagem.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  mensagemForm!: FormGroup;

  constructor(
    private router: Router,
    private mensagemService: MensagemService,
    private autenticaService: AutenticaService
  ) { }

  ngOnInit(): void {
    this.mensagemForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
    })
  }

  get titulo() { return this.mensagemForm.get('titulo')!; }

  submitMensagem() {

    var dadosMensagem = this.mensagemForm.getRawValue() as MensagemModel;

    this.mensagemService.Add(dadosMensagem)
      .subscribe(token => {

        this.autenticaService.ObterTOken();
        this.router.navigate(["/teste"]);

      },
        erro => {

        })

  }

}
