//selector variables
const oven = document.querySelector("#oven");
const cookie = document.querySelector("#cookie");
const factory = document.querySelector("#factory");
let displayCookies = document.querySelector("#total-cookies");
let displayOvens = document.querySelector("#total-ovens");
let displayFactories = document.querySelector("#total-factories");
/* task 1: declare a totalCookies variable, 
ovens variable, and factories variables. Set each one
equal to 0. */
let totalCookies = 0;
let ovens = 0;
let factories = 0;

cookie.onclick = function () {
  /* task 2: reassign the value of totalCookie
   to be itself plus 1. See if you can find a shorthand
    with a Google search. */
  totalCookies++;

  /* task 3: Uncomment the line below. Check to see
  that the amount of cookies increases when you click
  the image and that the number displays correctly. */
  displayCookies.innerHTML = totalCookies;
};

oven.onclick = function () {
  /* task 4: Create an if/else statement. In this statement we
  want a condition for anytime the totalCookies is less than 30,
  an alert will pop up that says "You need 30 cookies to buy 
  an oven!" (or something that gets that message across) */
  if (totalCookies < 30) {
    alert("You need 30 cookies to buy an oven!");
  } else {
    totalCookies = totalCookies - 30;
    ovens++;
    displayCookies.innerHTML = totalCookies;
    displayOvens.innerHTML = ovens;
  }
  /* task 5: The else portion should run a block of code where
  four things happen: 
  (1) reassign the totalCookies variable to itself minus 30 
  (2) update the displayCookies innerHTML to equal totalCookies
  (3) reassign the ovens variable to itself plus 1
  (4) update the displayOvens innerHTML to equal ovens */
};

/* task 6: The factory is locked! Based on how the oven 
section works, see if you can get a factory into the game. 
You will need to update the HTML to display the numbers 
of factories. Don't forget to save it as a variable at 
the top with your other selectors! */
if (ovens < 10) {
  alert("You need 10 ovens to buy an factory!");
} else {
  ovens = ovens - 10;
  factories++;
  displayCookies.innerHTML = totalCookies;
  displayOvens.innerHTML = ovens;
  displayFactories.innerHTML = factories;
}
//UPDATES TOTALCOOKIES EVERY SECOND (1000 MILLISECONDS), ONCE AN OVEN IS ACCESSED
//UNCOMMENT TO USE
window.setInterval(function () {
  /* task 7: this line below needs updating if you add a 
  factory. How could we change it?*/
  //   totalCookies = totalCookies + 12 * ovens;
  //   displayCookies.innerHTML = totalCookies;
  // }, 1000);
});
