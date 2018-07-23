import { Component, OnInit } from '@angular/core'; // importer la bibliothèque de base

//Marque une classe en tant que composant angulaire et collecte les métadonnées de configuration du composant.
@Component({
  selector: 'app-contact',//selection du app specifique
  templateUrl: './contact.component.html',//chargement de l'html
  styleUrls: ['./contact.component.css'] //chargement du css
})
//creation de class pour envoie des données vers le html
export class ContactComponent implements OnInit {
Adresse='Oradour sur Glane 39 rue des garennes';
Telephone='Tel: 06.44.71.11.34';
Mail='florianbourgeois87@gmail.com ';
Titre='Détails';
Youtube='---> Ma chaine Youtube <---';
  constructor() { }

  ngOnInit() {
  }

}
