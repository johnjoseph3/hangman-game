var hangmanWords = [
  "fanciful","gentle","air","float","breeze","sleep","sound","float","drift","rest","myth",
  "mystical","magic","awake","drift","sing","breath","calm","muse","mist","day","be",
  "astral","ideal","relax","aware","ideal","fresh","vague","vision","perspective","shadow",
  "inner","sooth","believe","lull","substance","jolly","agree","enjoy","reach",
  "delve","beauty","different","same","one","all","inside","outside","within","without",
  "cheer","divert","forget","sedate","numb","look","airy","ethereal","light",
  "refine","simple","aeriel","vapor","mist","celestial","rare","time","charm",
  "slight","soft","mild","fine","number","people","water","call",
  "find"
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


userAttempts = 10;

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


















