import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})

export class MensagemService {

    constructor(private httpCLient: HttpClient) { }

    private readonly baseURL = environment["endPoint"];

    GetAll() {
        return this.httpCLient.post<any>(`${this.baseURL}/GetAll`, null);
    }

    ListaMensagensCustomizada() {
        return this.httpCLient.post<any>(`${this.baseURL}/Message/ListaMensagensCustomizada`, null);
    }

    Add(objeto:any){
        return this.httpCLient.post<any>(`${this.baseURL}/Add`, objeto);
    }
}