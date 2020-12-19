import { Component } from '@angular/core';

@Component({
  selector: 'qom-root',
  template: `
    <qom-navbar></qom-navbar>
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'quizz-o-max';
}
