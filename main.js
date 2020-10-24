var affirmation = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

var mantra = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."];

var currentMessage = "";
//this will be populated based on index of randomly generatred affirmation or mantra depending on selection of choice.

var radioSelection = document.querySelector('.select');
//needed?
var messageButton = document.querySelector('.messageButton');
var message = document.querySelector('.message');
//will be used to make message appear

var bellImage = document.querySelector('img');
//to add/remove hidden with classList?

window.addEventListener('load', preventDefault);
messageButton.addEventListener('click', generateMessage);

function preventDefault() {
  event.preventDefault();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}
//create a random function generator that will be called inside of our functions

function generateMessage() {

  if (radioSelection === '[value="affirmation"]') {
    currentMessage = affirmation[getRandomIndex(affirmation)];
  } else {
    currentMessage = mantra[getRandomIndex(mantra)];
  }

  //getting back blanks? nothing in log?
  console.log(currentMessage);

  bellImage.classList.add('hidden');
  message.classList.remove('hidden');

  message.innerText = currentMessage;
}
//I want to see which button is selected .clicked?; why does a for loop apply to something that's not an array?

//I'm only getting affirmations..and now only mantras?..and now only affirmations...why?

//based on that information will trigger either a random mantra or a random affirmation from generating
//then that random message will be returned and displayed in the p of forMessage (innerText)