import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AjoutComponent } from './ajout/ajout.component';
import { EtudiantformComponent } from './etudiantform/etudiantform.component';
@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    AjoutComponent,
    EtudiantformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
