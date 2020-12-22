# Quizz'O'Max
An app made using the OpenTrivia Database to generate general knowledge tests and store your scores about those. With this web app, you can test yourself on many different questions coming from a free database. There are a total of 24 different categories to choose from and three different difficulties. Questions can be either "True or False" type of questions or multi-choice questions. Taking quizzes is the best way to learn new things and improve your general culture, so why not trying it ? A score is given to you at the end of the quizz and it can be saved to the ladderboard if you wish.
Score calculation is simple : You start with a certain amount of points, for every good answer, you get some more points, wrong answers will make you lose some.

## Installation
To install this app on your own server, you will need to install multiple tools.  

- First of all, install the "Node Package Manager" with the Angular library :  
```
sudo apt install npm && npm install angular
```
- Then, install typescript library and the angular CLI globally (to use ng commands)
```
npm install typescript
npm install -g @angular/cli
```
- Get a copy of the source code from this github page (either using git clone or by downloading the ZIP file for the master branch) and install the dependancies for this project (from the root of the app)
```
cd /your/path/to/quizz-o-max/
npm install
```

To make use of highscores feature, you will need to have a local json-server running on the port 3000. To install it :
```
npm install -g json-server
```
Note that the app will work without the json-server but you will not be able to keep your highscores over time. They will be saved for your current session but evrytime you leave or refresh the page scores will disappear. Only the ScoresService of the project needs this json-server to be running.

## Usage
To start the app :

```
cd /your/path/to/quizz-o-max/
//If you installed the json-server, run it for highscores saving functionnality
npx json-server database/scores.json

//Run the web app
ng serve
```

Then connect to http://localhost:4200 (unless you changed your ng server settings).

## Documentation

# About Quizz-O-Max
As stated on the description, Quizz-O-Max is a web application that uses questions from OpenTrivia Database which is an online database of questions that provides a powerful API to work with. This API is really interesting because it does provide an API URL when you program with it. In fact, it is free to use this API without even creating an account.

The API provides many questions with a combination of difficulty, types and categories. Quizz-O-Max allow you to generate quizzes using different questions from the API.

# About the API
The API is well documented and provides a great URL generator to make tests.

Using this generator to find out about all the different API options and how they work is really easy.
By following an URL, we gat a json response :

{ "response_code":0, "results": [ { "category":"Entertainment: Video Games", "type":"multiple", "difficulty":"easy", "question":"Which of these is NOT a team available in the game Pok&eacute;mon Go?", "correct_answer":"Team Rocket", "incorrect_answers": [ "Team Instinct", "Team Valor", "Team Mystic" ] } ] }

# Response Code
First a
response_code
is given. This is of course stored in my application because it allows me to know if yes or no, the request actually gave a result.

# Results
Here comes an array of results. Every object of this array is a question on its own. In this example particularly, it is composed of only one question, just to make this page readible.

# Category
Now, for each question (or result) there is an associated category. Giving a hint on what the question subject is. It is only for informative purposes but I will be using this variable as a filter as well for creating quizzes on the play page.

# Type
The type of question can be either
multiple
or
boolean
. When it is multiple, it means that the answer can be a choice between 4 given possibilities. If it is boolean, well you guessed it, it is either true or false.

# Difficulty
The difficulty of the question itself. Of course harder questions are in fact questions that less people around the globe could actually easily tackle while easy questions are made for everyone.

# Question
A string containing the question itself. As you can see in the example, there are characters that aren't gathered correctly. See the
é (cute e)
is in fact written
&eacute
as a pure string. So it must be handled when displaying.

# Correct Answer
Obviously, it contains the string for the correct answer to the question.

# Incorrect_answers
Is an array of all the 3 answers that are not right for this question. To display answers on screen, I created an array made of the concatenation of both correct and incorrect answers and shuffled them to make sure the correct answer ins't always at the same spot.

## TODO
Considering the fact that this app is working, I could still add some things to it :
- A timer telling you how much time you spent on every question
- A dark theme
- Docker files to hold the app and the json-server
- Writing transcription for every "&...;" special character. 
- A multiplayer mode with synchronisation (could be a lot of work).

## License
[GPL](https://choosealicense.com/licenses/gpl-3.0/)
