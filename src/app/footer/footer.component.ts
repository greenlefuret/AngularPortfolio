import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer= ' Copyright BOURGEOIS Florian ©  Site réalisé avec Angular et'
  constructor() { }

  ngOnInit() {
  }

}
