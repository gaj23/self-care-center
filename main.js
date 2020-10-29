var radioSelection = document.querySelectorAll('input[type="radio"]');
var messageButton = document.querySelector('.messageButton');
var message = document.querySelector('.message');
var image = document.querySelector('img');

messageButton.addEventListener('click', generateMessage);

function generateMessage() {

  //
  var randomIndex = getRandomIndex(affirmations);
  var randomIndex = getRandomIndex(mantras);

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
    alert("You've reached the end of our avaliable messages. Please click 'ok' to view them again!");
    hideMessage();
  }
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

//.toggle!
//mv from line44 to just inside function
//rm line 52
//combiine hide/reveal with toggle option only