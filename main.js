var affirmation = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

var mantra = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."];

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

function generateMessage() {

  if (radioSelection[0].checked) {
    currentMessage = affirmation[getRandomIndex(affirmation)];
    manageMessagesDisplayed();
  } else {
    currentMessage = mantra[getRandomIndex(mantra)];
    manageMessagesDisplayed();
  }
  console.log(messageArray);
  message.innerText = currentMessage;
  revealMessage();
}
//how can I make this more dynamic with a for loop? (radio buttons are arrays?!; another document.selector?)

function manageMessagesDisplayed() {

  if (messageArray.length === 0) {
    messageArray.push(currentMessage)
  } else if (messageArray.length < (affirmation.length + mantra.length))

  //max 28 of an array, but great than a max is occuring?
  {
    for (var i = 0; i < messageArray.length; i++) {
      if (messageArray[i] !== currentMessage) {
        messageArray.push(currentMessage);
      }
    }
  } else {
    //alert
    messageArray = [];
  }
  //see first if there's anything in the array, if not, push that value.
  //else if messageArray.length > (affirmation.length + mantra.length) create a for loop to iterate over the messageArray to compare newly generated message and if it exists in this array
  //if it !there then push it to the array and allow the message to appear
  //no else needed inside of the loop
  //else then return an alert that says, hey, you reached the end, you'll see repeats from here on and reassigns the messageArray = [];
  //call this function inside of generateMessage!
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function revealMessage() {
  bellImage.classList.add('hidden');
  message.classList.remove('hidden');
}