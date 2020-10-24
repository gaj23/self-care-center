var affirmation = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

var mantra = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."];
console.log(mantra.length);
console.log(affirmation.length);


var currentMessage = "";
var messageArray = [];

var radioSelection = document.querySelectorAll('input[type="radio"]');
var messageButton = document.querySelector('.messageButton');
var message = document.querySelector('.message');
var bellImage = document.querySelector('img');

window.addEventListener('load', preventDefault);

function preventDefault() {
  event.preventDefault();
}

messageButton.addEventListener('click', generateMessage);
//how can I account for having someone just clicking the button?

function generateMessage() {

  if (radioSelection[0].checked) {
    currentMessage = affirmation[getRandomIndex(affirmation)];
    manageMessagesDisplayed(currentMessage);
  } else {
    currentMessage = mantra[getRandomIndex(mantra)];
    manageMessagesDisplayed(currentMessage);
  }
  message.innerText = currentMessage;
  revealMessage();
  console.log(messageArray);
}
//how can I make this more dynamic with a for loop? (radio buttons are arrays?!; another document.selector?)

function manageMessagesDisplayed() {

  if (!messageArray.includes(currentMessage)) {
    return messageArray.push(currentMessage);
  } else {
    alert("I'm sorry, you've reached the end of our avaliable uplifting messages. Press 'ok' if you'd like to go through them again!");
    messageArray = [];
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function revealMessage() {
  bellImage.classList.add('hidden');
  message.classList.remove('hidden');
}