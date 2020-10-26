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
  var affirmationsCopy = affirmations;
  //trying to work around the DOM & repopulate an empty array from using the splice method
  var affirmationsIndex = getRandomIndex(affirmations);
  //change to affrimation index
  var usedMantra = getRandomIndex(mantras);
  //change to mantrasindex cmd +d

  if (radioSelection[0].checked) {
    currentMessage = affirmationsCopy[affirmationsIndex];
    manageMessagesDisplayed(affirmationsCopy, affirmations);
    usedAffirmations.push(affirmationsCopy.splice(affirmationsIndex[0], 1));
    //at what index in what array do I want to "pull" the data from? splitting up .push and .splice? 
    message.innerText = currentMessage;
    revealMessage();
    console.log('reterned affirmations', usedAffirmations);
    // console.log('this is the affirmations array', affirmationsCopy, 'this is the current message',
    //   currentMessage);
  } else if (radioSelection[1].checked) {
    currentMessage = mantras[usedMantra];
    manageMessagesDisplayed(mantrasCopy, mantras);
    mantrasCopy.splice(currentMessage, 1);
    message.innerText = currentMessage;
    revealMessage();
    console.log('this is the mantras array', mantras, 'this is the current message',
      currentMessage);
  } else {
    alert("Please select from one of the two options to recieve your message.");
  }
  console.log('this is affirmations', affirmations, 'this is the copy', affirmationsCopy, )
}
//how can I make this more dynamic with a for loop? (radio buttons are arrays?!; another document.selector?)

function manageMessagesDisplayed(arrayCopy, main) {
  if (!arrayCopy.length) {
    arrayCopy = main;
    //contidionals are problematic?
    alert("You've reached the end of our avaliable uplifting messages. Press 'ok' if you'd like to go through them again!")
    console.log(arrayCopy);
    // return arrayCopy;
    // hideMessage();
  }
  //how can I repopulate an empty array on the dom??
  //how to prevent undefined from appearing?
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