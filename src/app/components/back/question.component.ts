import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
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
          <div class="flex-item">
            <button mat-button *ngFor="let answer of question.answers" (click)="answer===question.correct_answer ? right() : wrong()">
                {{answer}}
            </button>
          </div>
        </div>
      </div>
  `,
  styles: []
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  @Output() answering = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  right(): void{
    this.answering.emit(+50);
    console.log("Right !");
  }

  wrong(): void{
    this.answering.emit(-50);
    console.log("Wrong !");
  }

}
