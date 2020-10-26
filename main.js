var affirmations = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."];
console.log(affirmations.length); //13
console.log(mantras.length); //15

var currentMessage = "";
var usedAffirmations = [];
var usedMantras = [];

var radioSelection = document.querySelectorAll('input[type="radio"]');
var messageButton = document.querySelector('.messageButton');
var message = document.querySelector('.message');
var image = document.querySelector('img');


messageButton.addEventListener('click', generateMessage);


function generateMessage() {

  var affirmationsIndex = getRandomIndex(affirmations);
  var mantrasIndex = getRandomIndex(mantras);
  //somewhere in my if statement, undefined is being pushed, where and why would that be?

  if (radioSelection[0].checked) {
    manageMessagesDisplayed(affirmations, usedAffirmations);
    currentMessage = affirmations[affirmationsIndex];
    message.innerText = currentMessage;
    var singularAffirmation = affirmations.splice(affirmationsIndex, 1);
    usedAffirmations.push(singularAffirmation[0]);
    revealMessage();
    console.log(usedAffirmations);
  } else if (radioSelection[1].checked) {
    manageMessagesDisplayed(mantras, usedMantras);
    currentMessage = mantras[mantrasIndex];
    var singularMantra = mantras.splice(currentMessage, 1);
    usedMantras.push(singularMantra[0]);
    message.innerText = currentMessage;
    revealMessage();
    console.log(usedMantras);
  } else {
    alert("Please select from one of the two options to recieve your message.");
  }
  console.log('used affirmations', usedAffirmations);
}


function manageMessagesDisplayed(array, spliced) {
  if (array.length === 1) {
    hideMessage();
    //the undefined is occuring *after* the alert pops up; I need to do something here to prevent that push .
    alert("You've reached the end of our avaliable uplifting messages. Press 'ok' if you'd like to go through them again!");
    array = array.concat(spliced);
    spliced = [];
    console.log(array);
    console.log(spliced);
  }
}

function getRandomMessage(array) {
  return Math.floor(Math.random() * array.length)
  // var affirmationsIndex = getRandomIndex(affirmations);
  // var mantrasIndex = getRandomIndex(mantras);
}

function revealMessage() {
  image.classList.add('hidden');
  message.classList.remove('hidden');
}

function hideMessage() {
  image.classList.remove('hidden');
  message.classList.add('hidden');
}