import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qom-about',
  template: `
    <div class="flex-container-col center">
      <div class="flex-item">
        <div>
          <h1>
            About Quizz-O-Max
          </h1>
          <p>As stated on the home page, Quizz-O-Max is a web application that uses questions from <a href="opentdb.com">OpenTrivia Database</a>
            which is an online database of questions that provides a powerful API to work with. This API is really interesting because
            it does provide an API URL when you program with it. In fact, it is free to use this API without even creating an account.
          </p>
          <p>
            The API provides many questions with a combination of difficulty, types and categories. Quizz-O-Max allow you to generate quizzes
            using different questions from the API.
          </p>
        </div>
      </div>
      <div class="flex-item">
        <div>
          <h1>
            About the API
          </h1>
          <p>
            The API is well documented and provides a great URL generator to make tests.
          </p>
          <img class="center" src="assets/url_generator.png" alt="The API URL Generator " width="50%"/>
          <p>
            Using this generator to find out about all the different API options and how they work is
            really easy.<br />
            By following an URL, we gat a json response :
          </p>
          <code>{{json_example}}</code><br />
          <h2>Response Code</h2>
          <p>
            First a <code>response_code</code> is given. This is of course stored in my application because
            it allows me to know if yes or no, the request actually gave a result.
          </p>
          <h2>Results</h2>
          <p>
            Here comes an array of results. Every object of this array is a question on its own. In this example
            particularly, it is composed of only one question, just to make this page readible.
          </p>
          <h2>Category</h2>
          <p>Now, for each question (or result) there is an associated category. Giving a hint on what the question subject
            is. It is only for informative purposes but I will be using this variable as a filter as well for creating quizzes
            on the play page.
          </p>
          <h2>Type</h2>
          <p>
            The type of question can be either <code>multiple</code> or <code>boolean</code>. When it is multiple, it means that
            the answer can be a choice between 4 given possibilities. If it is boolean, well you guessed it, it is either true or false.
          </p>
          <h2>Difficulty</h2>
          <p>
            The difficulty of the question itself. Of course harder questions are in fact questions that less people around the globe could
            actually easily tackle while easy questions are made for everyone.
          </p>
          <h2>Question</h2>
          <p>
            A string containing the question itself. As you can see in the example, there are characters that aren't gathered correctly.
            See the <code>é (cute e)</code> is in fact written <code>&eacute</code> as a pure string. So it must be handled when displaying.
          </p>
          <h2>Correct Answer</h2>
          <p>
            Obviously, it contains the string for the correct answer to the question.
          </p>
          <h2>Incorrect_answers</h2>
          <p>
            Is an array of all the 3 answers that are not right for this question. To display answers on screen, I created an array made of the
            concatenation of both correct and incorrect answers and shuffled them to make sure the correct answer ins't always at the same spot.
          </p>
        </div>
      </div>
      <div class="flex-item">
        <div>
          <h1>About the project itself</h1>
          <p>
            The project has been made in the scope of a class on web technologies and more precisely angular and nodeJS.
            I, Yanis ATTIA am the only maintainer of this project and the code and package to deploy it locally can be found
            at this <a target="_blank" href="http://github.com/yadev83/quizz-o-max">github repo</a>. Feel free to download it and have fun !
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  json_example = `
    {
      "response_code":0,
      "results":
      [
        {
          "category":"Entertainment: Video Games",
          "type":"multiple",
          "difficulty":"easy",
          "question":"Which of these is NOT a team available in the game Pok&eacute;mon Go?",\n
          "correct_answer":"Team Rocket",
          "incorrect_answers":
          [
            "Team Instinct",
            "Team Valor",
            "Team Mystic"
          ]
        }
      ]
    }
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
