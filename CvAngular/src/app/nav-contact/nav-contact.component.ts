import { Component, OnInit } from '@angular/core';// importer la bibliothèque de base

//Marque une classe en tant que composant angulaire et collecte les métadonnées de configuration du composant.
@Component({
  selector: 'app-nav-contact',//selection du app specifique
  templateUrl: './nav-contact.component.html',//chargement de l'html
  styleUrls: ['./nav-contact.component.css']  //chargement du css
})
//creation de class pour envoie des données vers le html
export class NavContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
