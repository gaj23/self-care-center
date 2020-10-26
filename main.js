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

window.addEventListener('load', preventDefault);

function preventDefault() {
  event.preventDefault();
}

messageButton.addEventListener('click', generateMessage);

function generateMessage() {

  var affirmationsIndex = getRandomIndex(affirmations);
  var mantrasIndex = getRandomIndex(mantras);

  if (radioSelection[0].checked) {
    currentMessage = affirmations[affirmationsIndex];
    manageMessagesDisplayed(affirmations, usedAffirmations);
    var singularAffirmation = affirmations.splice(affirmationsIndex, 1);
    usedAffirmations.push(singularAffirmation[0]);
    message.innerText = currentMessage;
    revealMessage();
  } else if (radioSelection[1].checked) {
    currentMessage = mantras[mantrasIndex];
    manageMessagesDisplayed(mantras, usedMantras);
    var singularMantra = mantras.splice(currentMessage, 1);
    usedMantras.push(singularMantra[0]);
    message.innerText = currentMessage;
    revealMessage();
  } else {
    alert("Please select from one of the two options to recieve your message.");
  }
  console.log('used affirmations', usedAffirmations, 'used Mantras', usedMantras);
}


function manageMessagesDisplayed(array, spliced) {
  if (!array.length) {
    alert("You've reached the end of our avaliable uplifting messages. Press 'ok' if you'd like to go through them again!")
    array = spliced;
  }
  //how to prevent undefined from appearing?
  hideMessage();
  console.log(array);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function revealMessage() {
  image.classList.add('hidden');
  message.classList.remove('hidden');
}

function hideMessage() {
  image.classList.remove('hidden');
  message.classList.add('hidden');
}