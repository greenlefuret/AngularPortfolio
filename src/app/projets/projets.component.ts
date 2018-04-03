import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
Projets1='Navigateur de Fichiers';
Projets2='Upload de Fichiers';
Projets3='Createur de même';
Projets4='Pong';
Projets5='Blog';
Projets6='Template 1';
Projets7='Template 2';
Projets8='Template 3';
DescriProjets1='Cet explorateur de fichier affiche en direct le chemin où nous sommes. Il est customisé à la simpson mais n\'a aucun rapport avec la série. Un bouton retour est aussi prévu pour la navigation.';
DescriProjets2='Cette application permet de charger des fichiers sur une base de données. Vous pouvez vous inscrire ou non. Les seules nuance sont le poids des uploads que vous pourrez faire et leur durée de vie . En cliquant sur la liste des activités, vous pourrez voir alors tous les fichiers que vous avec déjà stockés.';
DescriProjets3='Ceci est un générateur de même. On choisit une photo, on lui attribue un texte et on télécharge le résultat.';
DescriProjets4='Une réplique du fameux jeu PONG';
DescriProjets5=' Blog relié à une base de données pour les articles. Il y a plusieurs fonctionnalités au blog. Afficher les articles du plus récent au plus vieux, afficher tous les articles d\'un certain auteur,  afficher les articles d\'une certaine catégorie, écrire un article.';
DescriProjets6='Mon Premier Template HTML/CSS.';
DescriProjets7='Mon Deuxiéme Template HTML/CSS responsive Bootstrap.';
DescriProjets8='Mon Troisième Template HTML/CSS responsive Bootstrap.';
  constructor() { }

  ngOnInit() {
  }

}
