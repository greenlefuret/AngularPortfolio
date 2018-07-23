import { Component, OnInit } from '@angular/core';// importer la bibliothèque de base

//Marque une classe en tant que composant angulaire et collecte les métadonnées de configuration du composant.
@Component({
  selector: 'app-introduction',//selection du app specifique
  templateUrl: './introduction.component.html',//chargement de l'html
  styleUrls: ['./introduction.component.css']  //chargement du css
})
//creation de class pour envoie des données vers le html
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
