import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EtudiantService} from '../services/etudiant.service';
import {Etudiant} from '../model/etudiant';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
    etudiant:Etudiant= new Etudiant();
    etudiants = {};
    idEtudiant :number;

  constructor(private route : ActivatedRoute, private router: Router,
              private etudiantService: EtudiantService) {
              this.idEtudiant=route.snapshot.params['id'];
  }

  ngOnInit() {
    this.etudiantService.getEtudiant(this.idEtudiant)
      .subscribe(data=> {
        this.etudiant = data["etudiant"];
        }, err => {
        console.log(err);
        }
      )
  }
  OnSave() {
    this.etudiantService.saveEtudiant(this.etudiant);
  }
}
