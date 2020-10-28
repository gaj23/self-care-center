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

  //
  var affirmationsIndex = getRandomIndex(affirmations);
  var mantrasIndex = getRandomIndex(mantras);

  // //how can I refactor so that all that is returned in an index? put an if statement in this function?
  var usedMessages;
  var messages;

  if (radioSelection[0].checked) {
    // randomIndex = getRandomIndex(affirmations);
    messages = affirmations;
    usedMessages = usedAffirmations;
  } else if (radioSelection[1].checked) {
    // randomIndex = getRandomIndex(mantras);
    messages = mantras;
    usedMessages = usedMantras;
    // console.log('randomIndex', randomIndex, 'messages array', messages, 'usedMessages', usedMessages);
  } else {
    alert("Please select from one of the two options to recieve your message.");
  }

  if (messages.length > 1) {
    currentMessage = messages[randomIndex];
    message.innerText = currentMessage;
    var singularMessage = messages.splice(randomIndex, 1);
    usedMessages.push(singularMessage[0]);
    revealMessage();
  } else {
    currentMessage = messages[0];
    message.innerText = currentMessage;
    var singularMessage = messages.splice(0, 1);
    usedMessages.push(singularMessage[0]);
    messages = usedMessages;
    usedMessages = [];
    revealMessage();
    theEnd();
    hideMessage();
  }
}

function theEnd() {
  alert("You've reached the end of our avaliable messages. Please click 'ok' to view them again!");
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