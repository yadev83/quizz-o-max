import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'qom-menu',
  template: `
    <div id="menu-content">
      <a routerLink="/home" routerLinkActive="selected-menu"><button mat-button>Index</button></a>
      <a routerLink="/play" routerLinkActive="selected-menu"><button mat-button>Play</button></a>
      <a routerLink="/scores" routerLinkActive="selected-menu"><button mat-button>Highscores</button></a>
      <a routerLink="/about" routerLinkActive="selected-menu"><button mat-button>About</button></a>
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
