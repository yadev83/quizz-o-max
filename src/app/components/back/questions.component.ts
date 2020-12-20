import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/objects/question';
import { QuizzapiService } from 'src/app/services/quizzapi.service';

@Component({
  selector: 'qom-questions',
  template: `
    <h1>Number of Questions : {{this.quizzApiService.getAll().length}}</h1>
    <qom-question *ngFor="let question of this.quizzApiService.getAll()" [question]="question"></qom-question>
  `,
  styles: [
  ]
})
export class QuestionsComponent implements OnInit {
  questions: Array<Question> = new Array();

  constructor(public quizzApiService: QuizzapiService) {
  }

  ngOnInit(): void {
  }

}
