import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qom-navbar',
  template: `
    <p>
      <mat-toolbar>
        <button mat-icon-button class="example-icon" aria-label="Menu button with icon">
          <mat-icon>menu</mat-icon>
        </button>
        <span>My App</span>
        <span class="spacer"></span>
        <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
          <mat-icon>share</mat-icon>
        </button>
    </mat-toolbar>
    </p>
  `,
  styles: [
    ".spacer {flex: 1 1 auto;}"
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
