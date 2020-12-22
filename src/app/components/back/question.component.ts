import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/objects/question';

@Component({
  selector: 'qom-question',
  template: `
      <div *ngIf="question != undefined">
        <div class="flex-container-col center">
          <div class="question-details">
            <h3 class="category">{{question.category}}</h3>
            <h3 class="difficulty">{{question.difficulty}} - (+{{value}})</h3>
          </div>
          <div class="answer-container space-top">
            <p class="question">{{question.question}}</p>
          </div>
          <div class="answer-container inner-component space-top">
            <button *ngFor="let answer of question.answers" mat-button (click)="answer===question.correct_answer ? right() : wrong()">
              {{answer}}
            </button>
          </div>
        </div>
      </div>

      <div *ngIf="question === undefined">{{this.answering.emit(-2)}}</div>
  `,
  styles: []
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() value: number;

  @Output() answering = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  right(): void{
    this.answering.emit(1);
  }

  wrong(): void{
    this.answering.emit(-1);
  }

}
