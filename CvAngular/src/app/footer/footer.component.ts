import { Component, OnInit } from '@angular/core';// importer la bibliothèque de base

//Marque une classe en tant que composant angulaire et collecte les métadonnées de configuration du composant.
@Component({
  selector: 'app-footer',//selection du app specifique
  templateUrl: './footer.component.html',//chargement de l'html
  styleUrls: ['./footer.component.css'] //chargement du css
})
//creation de class pour envoie des données vers le html
export class FooterComponent implements OnInit {
  footer= ' Copyright BOURGEOIS Florian ©  Site réalisé avec Angular et'
  constructor() { }

  ngOnInit() {
  }

}
