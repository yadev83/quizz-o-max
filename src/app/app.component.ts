import { Component } from '@angular/core';

@Component({
  selector: 'qom-root',
  template: `
    <mat-drawer-container>
      <mat-drawer #side_menu mode="side">
        <qom-menu></qom-menu>
      </mat-drawer>
    <mat-drawer-container>
    <qom-navbar title="Quizz-O-Max" [menu]="side_menu"></qom-navbar>
    <div style="text-align:center" class="content">
      <h1>
        <qom-questions></qom-questions>
      </h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "Quizz'O Max";
}
