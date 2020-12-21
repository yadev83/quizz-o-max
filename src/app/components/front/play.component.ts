import { Component, OnInit } from '@angular/core';
import { format } from 'path';
import { QuizzapiService } from 'src/app/services/quizzapi.service';

@Component({
  selector: 'qom-play',
  template: `
    <div class="flex-container-col">
      <qom-newgame-form #form></qom-newgame-form>
      <div *ngIf="!form.showForm">
        <qom-questions [nb]="form.nbQuestions"></qom-questions>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class PlayComponent implements OnInit {


  constructor(public quizzService: QuizzapiService) { }

  ngOnInit(): void {
  }
}
