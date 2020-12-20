import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/objects/question';

@Component({
  selector: 'qom-question',
  template: `
      <div class="flex-container-col center">
        <div class="flex-item space-top">
          <p class="question">{{question.question}}</p>
        </div>
        <hr />
        <div class="flex-container space-top">
          <button class="flex-item" mat-button *ngFor="let answer of question.answers">{{answer}}</button>
        </div>
      </div>
  `,
  styles: []
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
