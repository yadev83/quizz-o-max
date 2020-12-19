import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qom-navbar',
  template: `
    <p>
      <mat-toolbar>
        <button (click)="menu.toggle()" mat-icon-button aria-label="Menu button with icon">
          <mat-icon>menu</mat-icon>
        </button>
        <span>{{title}}</span>
        <span class="spacer"></span>

        <a target="_blank" href="https://github.com/yadev83/quizz-o-max">
          <button mat-icon-button class="example-icon" aria-label="Get to github page" href="github.com">
            <mat-icon>share</mat-icon>
          </button>
        </a>
    </mat-toolbar>
    </p>
  `,
  styles: [
    ".spacer {flex: 1 1 auto;}"
  ]
})
export class NavbarComponent implements OnInit {
  @Input() title;
  @Input() menu;

  constructor() { }

  ngOnInit(): void {
  }

}
