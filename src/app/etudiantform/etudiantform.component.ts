import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../model/etudiant';
import {EtudiantService} from '../services/etudiant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-etudiantform',
  templateUrl: './etudiantform.component.html',
  styleUrls: ['./etudiantform.component.css']
})
export class EtudiantformComponent implements OnInit {
private etudiant: Etudiant;
private formation;
  constructor(private etudiantService: EtudiantService, private router: Router) { }

  ngOnInit() {
    this.etudiant=this.etudiantService.getter();
  }

  saveEtudiant() {
    if( this.etudiant.id==undefined){
      this.etudiantService.saveEtudiant(this.etudiant).subscribe(etudiant=>{
        console.log(etudiant);
        this.router.navigate(["/etudiants"]);
      }, err=>{
        console.log(err);
      });
    }else{
      this.etudiantService.update(this.etudiant).subscribe(etudiant=>{
        console.log(etudiant);
        this.router.navigate(["/etudiants"]);
      }, err=>{
        console.log(err);
      })
    }
  }
}
