import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
ResumeTitre1 = '2015';
ResumeTitre2 = '09/11/2015 au 18/08/2016:';
ResumeTitre3 = '10/2016 au 11/2016: ';
ResumeTitre4 = '11/12/2017 au 26/07/2018: ';
ResumeTitre5 = 'Futur : ';
ResumeTexte1 = 'Baccalauréat de Sciences et Technologies du Management et de la Gestion (STMG) ';
ResumeTexte2 = 'Gendarme Adjoint Volontaire à la Brigade de Paray le Monial (Bourgogne). ';
ResumeTexte3 = 'Manutentionnaire à l\'entreprise Pusterlat. ';
ResumeTexte4 = 'Formation Developpeur Web chez Aformac (Limoges). ';
ResumeTexte5 = 'Peut être chez vous... ';
Skills1 = 'HTML/CSS';
Skills2 = 'JAVASCRIPT';
Skills3 = 'PHP';
Skills4 = 'ANGULAR';
Skills5 = 'MYSQL';
Titre1 = 'EXPERIENCE';
Titre2 = 'SKILLS';
Titre3 = 'HOBBIES';
Hobbies1='Petanque';
Hobbies2='Jeux Videos';
Hobbies3='Animaux';


  constructor() { }

  ngOnInit() {
  }

}
