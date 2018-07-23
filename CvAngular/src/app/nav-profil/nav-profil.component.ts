import { Component, OnInit } from '@angular/core';// importer la bibliothèque de base

//Marque une classe en tant que composant angulaire et collecte les métadonnées de configuration du composant.
@Component({
  selector: 'app-nav-profil',//selection du app specifique
  templateUrl: './nav-profil.component.html',//chargement de l'html
  styleUrls: ['./nav-profil.component.css']  //chargement du css
})
//creation de class pour envoie des données vers le html
export class NavProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
