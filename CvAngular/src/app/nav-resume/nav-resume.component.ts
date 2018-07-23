import { Component, OnInit } from '@angular/core';// importer la bibliothèque de base

//Marque une classe en tant que composant angulaire et collecte les métadonnées de configuration du composant.
@Component({
  selector: 'app-nav-resume',//selection du app specifique
  templateUrl: './nav-resume.component.html',//chargement de l'html
  styleUrls: ['./nav-resume.component.css']  //chargement du css
})
//creation de class pour envoie des données vers le html
export class NavResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
