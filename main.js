var radioSelection = document.querySelectorAll('input[type="radio"]');
var messageButton = document.querySelector('.messageButton');
var message = document.querySelector('.message');
var image = document.querySelector('img');

messageButton.addEventListener('click', generateMessage);

function generateMessage() {
  revealMessage();
  if (radioSelection[0].checked) {
    messageHandler(affirmations)
  } else if (radioSelection[1].checked) {
    messageHandler(mantras);
  } else {
    alert("Please select from one of the two options to recieve your message.");
  }
}

function messageHandler(messageType) {
  var x = getRandomIndex(messageType);
  currentMessage = messageType[x];
  console.log(currentMessage);
  message.innerText = currentMessage;
  messageType.splice(x, 1);
  if (messageType.length === 0) {
    alert("You've reached the end of our avaliable messages. Please click 'ok' to view them again!");
    window.reload();
  }
}
//window.reload?? Location.reload

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function revealMessage() {
  image.classList.add('hidden');
  message.classList.remove('hidden');
}

// function hideMessage() {
//   image.classList.remove('hidden');
//   message.classList.add('hidden');
// }

//.toggle!
//mv from line44 to just inside function
//rm line 52
//combiine hide/reveal with toggle option only