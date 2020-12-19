import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/objects/question';
import { QuizzapiService } from 'src/app/services/quizzapi.service';

@Component({
  selector: 'qom-questions',
  template: `
    <h3>Number of Questions : {{this.quizzApiService.getAll().length}}</h3>
    <ul>
      <li *ngFor="let question of this.quizzApiService.getAll()">
        <div>
          <qom-question [question]="question"></qom-question>
        </div>
      </li>
    </ul>
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
