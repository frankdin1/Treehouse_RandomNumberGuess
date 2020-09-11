// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number

const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let count = 0;
while (count < 10){
guess = prompt("Enter a guess between 1 and 10");
guess = parseInt(guess);
count++;
  if (guess == randomNumber){
    if (count == 1){
    main.innerHTML = `<h2>Congrats. You guessed number      ${randomNumber}. It only took you ${count} try.</h2>`
    }
    else { 
      main.innerHTML = `<h2>Congrats. You guessed number ${randomNumber}. It took you ${count} tries.</h2>`
    }
    break;
  }
}
if (count == 10){
    main.innerHTML = `<h2>You failed to guess the right number. It was ${randomNumber}.</h2>`
}
 

