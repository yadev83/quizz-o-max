import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* IMPORTS ADDED MANUALLY FOR THE APP */
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';

import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/front/navbar.component';
import { MenuComponent } from './components/front/menu.component';
import { QuestionComponent } from './components/back/question.component';
import { QuestionsComponent } from './components/back/questions.component';
import { QuizzapiService } from './services/quizzapi.service';
import { HomeComponent } from './components/front/home.component';
import { PlayComponent } from './components/front/play.component';
import { ScoresComponent } from './components/front/scores.component';
import { AboutComponent } from './components/front/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    QuestionsComponent,
    QuestionComponent,
    HomeComponent,
    PlayComponent,
    ScoresComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule
  ],
  providers: [QuizzapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
