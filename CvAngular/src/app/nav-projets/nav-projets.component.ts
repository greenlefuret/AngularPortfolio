import { Component, OnInit } from '@angular/core';// importer la bibliothèque de base

//Marque une classe en tant que composant angulaire et collecte les métadonnées de configuration du composant.
@Component({
  selector: 'app-nav-projets',//selection du app specifique
  templateUrl: './nav-projets.component.html',//chargement de l'html
  styleUrls: ['./nav-projets.component.css']  //chargement du css
})
//creation de class pour envoie des données vers le html
export class NavProjetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
