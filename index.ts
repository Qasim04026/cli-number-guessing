#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input for guessing the number

// 3) Compare user input with the computer-generated number and show the result

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome to number Guessing Game")


const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "please guess a number between 1-6: ",
  },
]);

if (answer.userGuessNumber === randomNumber) {
  console.log("Congratulation! you guessed right number.");
} else {
  console.log("you guessed wrong number");
}
