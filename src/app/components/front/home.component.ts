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
            you get some more points, wrong answers will make you lose some and as the time passes, you lose some of
            your precious points, so answering faster will grant a better score in the end.<br />
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
          <img class="center" src="assets/play-demo-1.gif" alt="How to start a new game ?" width="33%"/>
          <p>
            Doing so will bring up a page containing a form to fill in with parameters for your game. Number of questions, Theme,
            Difficulty, Type of questions : You can customize the quizzes as you wish !
          </p>
          <img class="center" src="assets/play-demo-2.gif" alt="Customizing your game" width="33%">
          <p>
            If you like to compete with others, instead of customizing your own game, you can also pick a "competition preset".
            There are multiple presets to test yourself and these are made to allow for competition.
            You cannot store your score on a customized quizz but only if you use a competition preset and you will be compared to
            other people who played on the same preset.
          </p>
          <img class="center" src="assets/play-demo-3.gif" alt="Choosing a competition preset" width="33%">
          <p>
            After you are sure with customization of the game, you can click the "Play !" button and the quizz will start. From now,
            it is quite simple : When a question appear on your screen, you must click on the answer you think is the correct one.
            Once you clicked, the right answer is highlighted and you either loose or gain score.
          </p>
          <img class="center" src="assets/play-demo-4.gif" alt="Playing the game" width="33%">
          <p>
            At the end of the quizz, your global score is written on the screen and you can choose to store it in the ladderboard
            if you played on a competition preset. From now, you can restart the same quizz or access the home page again !
          </p>
          <img class="center" src="assets/play-demo-5.gif" alt="End of the game" width="33%">
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
