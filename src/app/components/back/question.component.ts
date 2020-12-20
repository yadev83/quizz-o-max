import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/objects/question';

@Component({
  selector: 'qom-question',
  template: `
      {{question.question}}
      <table *ngFor="let answer of question.answers">
        <tr>
          <td>
            {{answer}}
          </td>
        </tr>
      </table>
  `,
  styles: []
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
