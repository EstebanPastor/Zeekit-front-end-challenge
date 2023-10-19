Zeekit Frontend Developer Assigment

In this assigment, you will create a game in React called: "Guess the TV show name"

Gameplay and rules:

The goal of the game is to guess a TV show's name.
The player will see a placeholder for a TV name with some missing letters. The player should guess and fill in the TV show's name. If the player guesses successfully a tv show name, it gets a point and moves forward to guess another tv show name.
The player would be able to use a hint feature in case it's stuck with a specific TV show.
The player has a total of 3 life points. For each wrong guess, it loses a point. If the player lost all 3 points the game is over and can be started again.
The player would be able to view a statistics popup(the data needs to be saved for the session).

App requirements:
use this API
https://developers.themoviedb.org/3/gettins-started/introduction

fetch the data from here:
https:developers.themoviedb.org/3/tv/get-top-rated-tv

The main page contains:

1. Generated TV name with missing letters to fill.
2. An input component, where the player enters its guess.
3. "Check the guess" Button.
4. "Statistics" button.

Ths statistic popup will show the following info:

1. How many right guesses the player has.
2. How many wrong guesses the player has.
3. How many times the player has used the hint feature.

Example:
The computer shows the word: "Gi_e_"
The player should fill in the right answer "Given" so he will get one point and move to the next word.
The player should fill in the right answer "Given" so he will get one point and move to the next word.
If the player inputs a wrong word like "Gioed" he will lose a life point.
If the player clicks on the hint button he will see an overview of the TV show (below the guess button).
"Tightly clutching his Gibson guitar, Mafuyu Satou steps out of his dark apartment to begin another day of his high school life. While taking a nap in the quite..."


