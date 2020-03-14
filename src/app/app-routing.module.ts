import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjoutComponent} from './ajout/ajout.component';
import {EtudiantsComponent} from './etudiants/etudiants.component';
import {EtudiantformComponent} from './etudiantform/etudiantform.component';

const routes: Routes = [
  {path:'edit/:id', component : AjoutComponent},
  {path: 'etudiants', component:EtudiantsComponent},
  {path: "add", component: EtudiantformComponent},
  {path:'',
  redirectTo: '',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
