import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AutenticaService {

    private Autenticado: boolean = false;

    public DefineToken(token: string) {
        sessionStorage.setItem('token', token);
    }

    public ObterTOken() {
        return sessionStorage.getItem('token');
    }

    public LimparToken() {
        sessionStorage.removeItem('token');
    }
}