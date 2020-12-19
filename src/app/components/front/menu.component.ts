import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'qom-menu',
  template: `
    <div id="menu-content">
      <button mat-button>Index</button>
      <button mat-button>Play</button>
      <button mat-button>Highscores</button>
      <button mat-button>About</button>
    </div>
  `,
  styles: [
    "#menu-content{width:250px;}",
    "#menu-content>*{width:100%;}"
  ]
})
export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
