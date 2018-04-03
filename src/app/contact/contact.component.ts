import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
Adresse='Oradour sur Glane 39 rue des garennes';
Telephone='Tel: 06.44.71.11.34';
Mail='florianbourgeois87@gmail.com ';
Titre='Détails';
Youtube='https://www.youtube.com/channel/UCQIVhNMpbvqlDbWyWMt0c-A?pbjreload=10 ';
  constructor() { }

  ngOnInit() {
  }

}
