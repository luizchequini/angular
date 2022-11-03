import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class LoginService {

    constructor(private httpCLient: HttpClient) { }

    private readonly baseURL = environment["endPoint"];

    LoginUsuario(objeto:any){
        return this.httpCLient.post<any>(`${this.baseURL}/CriarTokenIdentity`, objeto);
    }
}