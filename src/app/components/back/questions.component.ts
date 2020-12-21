import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/objects/question';
import { QuizzapiService } from 'src/app/services/quizzapi.service';

@Component({
  selector: 'qom-questions',
  template: `
    <h1>Number of Questions : {{this.quizzService.getAll().length}}</h1>
    <qom-question *ngFor="let question of this.quizzService.getAll()" [question]="question"></qom-question>
  `,
  styles: [
  ]
})
export class QuestionsComponent implements OnInit {
  @Input() nb: number;

  constructor(public quizzService: QuizzapiService) {
  }

  ngOnInit(): void {
    this.quizzService.getRandom(this.nb);
  }

}
