import { Component, OnInit } from '@angular/core';// importer la bibliothèque de base

//Marque une classe en tant que composant angulaire et collecte les métadonnées de configuration du composant.
@Component({
  selector: 'app-profil',//selection du app specifique
  templateUrl: './profil.component.html',//chargement de l'html
  styleUrls: ['./profil.component.css']  //chargement du css
})
//creation de class pour envoie des données vers le html
export class ProfilComponent implements OnInit {
Adjectif='FUTUR DEVELOPPEUR WEB'
Embauche='Embauchez moi'
Description='BOURGEOIS Florian, 20ans, développeur Web en formation sérieux, curieux, et envieux d\'apprendre de nouvelles technologies ! L\'informatique est un domaine passionnant plein de possibilités, en constante évolution. C\'est pourquoi aujourd\'hui je suis heureux d\'évoluer dans ce milieu et je souhaite combiner mes nouvelles compétences avec celles déjà acquises lors de mon passage en Gendarmerie.'
  constructor() { }

  ngOnInit() {
  }

}
