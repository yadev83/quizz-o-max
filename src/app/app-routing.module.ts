import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/front/about.component';
import { HomeComponent } from './components/front/home.component';
import { PlayComponent } from './components/front/play.component';
import { ScoresComponent } from './components/front/scores.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'play', component: PlayComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'about', component: AboutComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
