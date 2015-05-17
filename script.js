var hangmanWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];



function clean (arr){
  cleanArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      cleanArr.push(arr[i]);
    }
  } 
  return cleanArr;  
}
clean(hangmanWords);



function chooseWord (arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  randomWord = arr[randomNum];
  return randomWord;
}
chooseWord(cleanArr);

  

function underscoreGen() {
  underscoreNum = parseInt(randomWord.length);
  display = [];

  for (i = 0; i < randomWord.length; i++) {
    display.push("_")
  }
}
underscoreGen();


var gameWord = document.querySelector('.game-word');
gameWord.textContent = display.join(' ');

var btn = document.querySelector('.submit-btn');


var resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', function() {
  location.reload();
} );


userAttempts = 8;

guessOutput = document.querySelector('.attempt-counter');
guessOutput.innerHTML = "You have: " + userAttempts + " guesses left";   
inputField = document.querySelector('input');



btn.addEventListener('click', function () {
  
  userGuess = document.querySelector('input').value;
  
  for (var i = 0; i < randomWord.length; i++) {
    if (userGuess === randomWord[i]) {
       display[i] = userGuess;
       gameWord.textContent = display.join(' ');
    }
  } 
  inputField.focus();
  document.querySelector('input').value = "";
  userAttempts -= 1;
  guessOutput.innerHTML = "You have: " + userAttempts + " guesses left";     

  if (randomWord === display.join('')) {
    gameWord.textContent = "Great job! You got the word!";
    btn.className += " hide";
    inputField.className += " hide";
    resetButton.className = "appear";
  }

  if (userAttempts <= 0){
    gameWord.textContent = "You\'ve run out of guesses. The word was: " + randomWord + ".";
    btn.className += " hide";
    inputField.className += " hide";
    resetButton.className = "appear";
  }
});


















