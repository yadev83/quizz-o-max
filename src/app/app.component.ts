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
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    ".content{margin:10px;}"
  ]
})
export class AppComponent {
  title = "Quizz'O Max";
}
