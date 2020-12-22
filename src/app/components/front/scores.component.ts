import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/objects/score';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'qom-scores',
  template: `
    <div class="flex-container-col center">
      <div class="flex-item">
        <h1>Highscores</h1>
        <table>
          <tr>
            <th>Username</th>
            <th>Answer ratio</th>
            <th>Final Score</th>
          </tr>
          <tr *ngFor="let score of scores">
            <td>{{score.uname}}</td>
            <td>{{score.valid_answers}}/{{score.nb_questions}}</td>
            <td>{{score.amount}}</td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ScoresComponent implements OnInit {

  scores : Array<Score>;

  constructor(public scoresService: ScoresService) {}

  ngOnInit(): void {
    this.scores = this.scoresService.scores;
  }

}
