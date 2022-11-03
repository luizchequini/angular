import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { AutenticaService } from 'src/app/service/Autentica.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService,
    private autenticaService: AutenticaService
  ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('luizchequini@gmail.com', [Validators.required, Validators.email]),
      senha: new FormControl('Fbb@2022', [Validators.required])
    })

    // this.loginForm = this.formbuilder.group({
    //   email: ['', [Validators.required, Validators.required]],
    //   senha: ['', [Validators.required]]
    // })
  }

  get email() { return this.loginForm.get('email')!; }
  get senha() { return this.loginForm.get('senha')!; }

  submitLogin() {

    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.loginService.LoginUsuario(dadosLogin)
      .subscribe(token => {

        this.autenticaService.DefineToken(token);
        this.router.navigate(["/mensagens"]);

      },
        erro => {

        })

  }
}
