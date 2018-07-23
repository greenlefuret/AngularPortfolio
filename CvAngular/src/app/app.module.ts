// importation des diferent modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavContactComponent } from './nav-contact/nav-contact.component';
import { NavProfilComponent } from './nav-profil/nav-profil.component';
import { NavProjetsComponent } from './nav-projets/nav-projets.component';
import { NavResumeComponent } from './nav-resume/nav-resume.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProfilComponent } from './profil/profil.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetsComponent } from './projets/projets.component';
import { AppRoutingModule } from './/app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavContactComponent,
    NavProfilComponent,
    NavProjetsComponent,
    NavResumeComponent,
    IntroductionComponent,
    ProfilComponent,
    ResumeComponent,
    ContactComponent,
    ProjetsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
