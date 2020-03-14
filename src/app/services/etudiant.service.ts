import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Etudiant} from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  public host:string="http://localhost:8082/"
  private etudiant : Etudiant;


  constructor(private http: HttpClient) {
  }
  public getFormation(){
    return this.http.get(this.host+"/formations");
  }
  public getEtudiantsFormation(f){
    return this.http.get(this.host+"/formations/"+f.id+"/etudiants");
  }
  public saveEtudiant(etudiant){
   return this.http.post(this.host+"/etudiants", etudiant);
  }
  public delete(id){
    return this.http.delete(this.host+"/etudiants/"+id);
  }
  getEtudiant(id){
    return this.http.get(this.host+"/etudiants/"+id);
  }
  public update(etudiant){
    return this.http.put(this.host+"/etudiants/"+etudiant.id, etudiant);
  }
 setter(etudiant:Etudiant){
    this.etudiant=etudiant;
 }
 getter(){
    return this.etudiant;
 }

}
