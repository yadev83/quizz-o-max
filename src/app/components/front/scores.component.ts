import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qom-scores',
  template: `
    <div class="flex-container-col center">
      <div class="flex-item">
        <h1>Highscores for Category 0</h1>
        <table>
          <tr>
            <th>Username</th>
            <th>Time spent (mm:ss)</th>
            <th>Answer ratio</th>
            <th>Final Score</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
        </table>
      </div>
      <div class="flex-item">
        <h1>Highscores for Category 1</h1>
        <table>
          <tr>
            <th>Username</th>
            <th>Time spent (mm:ss)</th>
            <th>Answer ratio</th>
            <th>Final Score</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
        </table>
      </div>
      <div class="flex-item">
        <h1>Highscores for Category 2</h1>
        <table>
          <tr>
            <th>Username</th>
            <th>Time spent (mm:ss)</th>
            <th>Answer ratio</th>
            <th>Final Score</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>12:50</td>
            <td>8/10</td>
            <td>650</td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ScoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
