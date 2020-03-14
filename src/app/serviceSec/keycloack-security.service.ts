import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {KeycloakInstance} from 'keycloak-js';
declare var Keycloak: any;
@Injectable({
  providedIn: 'root'
})
export class KeycloackSecurityService {
  public kc:KeycloakInstance;
  constructor(private http:HttpClient) { }
  public async init(){
    console.log("Test Initialisation");
    this.kc=new Keycloak({
      url: "http://localhost:8080/auth",
      realm:"spring-boot",
      clientId:"angular-product-app"
    });
    await this.kc.init({
      onLoad: "check-sso",
      promiseType: "native"
    });
    console.log(this.kc.token);
}
public getProducts(){
    return this.http.get("http://localhost:8081/produits");
}
public isManager():boolean{
    return this.kc.hasResourceRole("app-manager");
}
}
