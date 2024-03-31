#!/usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() *5 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number from 1 to 5",
  },
]);
if (answer.userGuessedNumber === randomNumber) {
  console.log("Congractulations! Your guessed number is correct.");
} else {
  console.log("Oops! You guessed wrong number");
}