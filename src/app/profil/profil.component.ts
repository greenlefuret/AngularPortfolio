import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
Adjectif='FUTUR DEVELOPPEUR WEB'
Embauche='Embauchez moi'
Description='Développeur Web en formation sérieux, curieux, et envieux d\'apprendre de nouvelles technologies ! L\'informatique est un domaine passionnant plein de possibilités, en constante évolution. C\'est pourquoi aujourd\'hui je suis heureux d\'évoluer dans ce milieu et je souhaite combiner mes nouvelles compétences avec celles déjà acquises lors de mon passage en Gendarmerie.'
  constructor() { }

  ngOnInit() {
  }

}
