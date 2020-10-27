var affirmations = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."];

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

  if (radioSelection[0].checked) {
    if (affirmations.length > 1) {
      currentMessage = affirmations[affirmationsIndex];
      message.innerText = currentMessage;
      var singularAffirmation = affirmations.splice(affirmationsIndex, 1);
      usedAffirmations.push(singularAffirmation[0]);
      revealMessage();
    } else {
      currentMessage = affirmations[0];
      message.innerText = currentMessage;
      var singularAffirmation = affirmations.splice(0, 1);
      usedAffirmations.push(singularAffirmation[0]);
      affirmations = usedAffirmations;
      usedAffirmations = [];
      revealMessage();
      theEnd();
      hideMessage();
      // manageMessagesDisplayed(affirmations, usedAffirmations);
    }
  } else if (radioSelection[1].checked) {
    if (mantras.length > 1) {
      currentMessage = mantras[mantrasIndex];
      var singularMantra = mantras.splice(currentMessage, 1);
      usedMantras.push(singularMantra[0]);
      message.innerText = currentMessage;
      revealMessage();
    } else {
      currentMessage = mantras[0];
      var singularMantra = mantras.splice(currentMessage, 1);
      usedMantras.push(singularMantra[0]);
      message.innerText = currentMessage;
      mantras = usedMantras;
      usedMantras = [];
      revealMessage();
      theEnd();
      hideMessage();
      // manageMessagesDisplayed(mantras, usedMantras);
    }
  } else {
    alert("Please select from one of the two options to recieve your message.");
  }
}

// function manageMessagesDisplayed(originalData, usedData) {
//   originalData = usedData;
//   usedData = [];
//   alert("You've reached the end of our avaliable messages. Please click 'ok' to view them again!");
// }
//I don't understand why this isn't working. So I hard coded it instead. If you could please walk me through it, I would greatly appreciate it.

function theEnd() {
  alert("You've reached the end of our avaliable messages. Please click 'ok' to view them again!");
}

function getRandomIndex(array) {

  return Math.floor(Math.random() * array.length)
  // refactor and return a variable index to generateMessage function
}

function revealMessage() {
  image.classList.add('hidden');
  message.classList.remove('hidden');
}

function hideMessage() {
  image.classList.remove('hidden');
  message.classList.add('hidden');
}