import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EtudiantService} from '../services/etudiant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Etudiant} from '../model/etudiant';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  listFormations;
  listEtudiants;
  currentFormation = {id: -1};
  currentEtudiant;
  idEtudiant: number;
  etudiant;

  constructor(private http: HttpClient, private etudiantService: EtudiantService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.idEtudiant = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    // this.http.get("http://localhost:8080/formations")
    this.etudiantService.getFormation()
      .subscribe(data => {
        this.listFormations = data;
      }, err => {
        console.log(err);
      });
  }


  onGetEtudiants(f) {
    this.currentFormation = f;
    //this.http.get("http://localhost:8080/formations/"+f.id+"/etudiants")
    this.etudiantService.getEtudiantsFormation(f)
      .subscribe(data => {
        this.listEtudiants = data;
      }, err => {
        console.log(err);
      });
  }

/*  onAjout(form) {
    this.etudiantService.saveEtudiant(form)
      .subscribe(data => {
        form = data;
      }, err => {
        console.log(err)
      });

  }*/

  ondeleteEtudiant(e) {
    this.etudiantService.delete(e.id)
      .subscribe(data => {
        let confirm = "Etes vous sur de supprimer";
        alert(confirm);
        //console.log(data);
        this.router.navigate(['']);

      }, err => {
        console.log(err);
      })
  }



  onPutEtudiant(etudiant) {
    this.etudiantService.setter(etudiant);
    this.router.navigate(["/add"]);
  }

  addPersonne() {
  let etudiant = new Etudiant();
  this.etudiantService.setter(etudiant);
  this.router.navigate(["/add"]);
  }
}
