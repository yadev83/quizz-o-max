import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qom-play',
  template: `
    <p>
      play works!
      <qom-questions></qom-questions>
    </p>
  `,
  styles: [
  ]
})
export class PlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
