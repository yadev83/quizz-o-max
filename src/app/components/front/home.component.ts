import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qom-home',
  template: `
    <div class="flex-container-col center">
      <div class="flex-item">
        <div>
          <h1>
            Welcome to Quizz-O-Max
          </h1>
          <p>Quizz-O-Max is a web application that allow you to test your culture on a lot of different subjects by providing you
            quizzes. All the quizzes comme from <a href="opentdb.com">OpenTrivia Database</a> which is an online database
            of questions that provides a powerful API to work with. There are a total of 24 different categories to choose from and
            three different difficulties. Questions can be either "True or False" type of questions or multi-choice questions.
            Taking quizzes is the best way to learn new things and improve your general culture, so why not trying it ?
            A score is given to you at the end of the quizz and it can be saved to the ladderboard if you wish.<br />
            Score calculation is simple : You start with a certain amount of points, for every good answer,
            you get some more points, wrong answers will make you lose some<br />
            What are you waiting for ? Go and test yourself now !
          </p>
        </div>
      </div>
      <div class="flex-item">
        <div>
          <h1>
            How To Play ?
          </h1>
          <p>
            To play the game and start a quizz, it is very simple ! First, click the menu icon and choose the "Play" button.
          </p>
          <img class="center" src="assets/play-demo-1.gif" alt="How to start a new game ?" width="45%"/>
          <p>
            Doing so will bring up a page containing a form to fill in with parameters for your game. Number of questions, Theme,
            Difficulty : You can customize the quizzes as you wish !
          </p>
          <img class="center" src="assets/play-demo-2.gif" alt="Customizing your game" width="45%">
          <p>
            If you like to compete with others, You may want to get the highest score possible ! Score is calculated pretty simply.
            By default, every question has a value of <b>50 points</b>. Hard questions has a value of <b>75 points</b> and easy questions
            weighs <b>25 points</b>. You start the game with the base points given by each question (i.e if playing for 10 normal questions,
            you will start with 500 points) Answering correctly will double the points a question weighs and answering wrongly will remove
            the points that question gave you. (In fact, if you do all wrong you'll end up with 0 points and if you do all right, you'll double
            the number of points you had at the beggining).<br />
            The best way to make a big score is to play on "Any Category" mode because locking a category will reduce the number of points a
            question weighs (to keep it fair). Also pick the "Hard" difficulty mode as it is only made of hard questions that are more valuable.
            And finally, pick a reasonable amount of questions because the more you have, the more possible score you can make, but also the more
            you can fail...
          </p>
          <hr />
          <p>
            After you are sure with customization of the game, you can click the "Play !" button and the quizz will start. From now,
            it is quite simple : When a question appear on your screen, you must click on the answer you think is the correct one.
            Once you clicked, a small popup tells you if you were right or wrong and the next question appears.
          </p>
          <img class="center" src="assets/play-demo-3.gif" alt="Playing the game" width="45%">
          <p>
            At the end of the quizz, your global score is written on the screen and a recap of your quizz session appears.
            You can see now the right answers for every question and you can see aswell which questions you failed and which you had right.
            You choose to play again with a fresh quizz or you can open the menu and leave for another page.
          </p>
          <img class="center" src="assets/play-demo-4.gif" alt="End of the game" width="45%">
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
