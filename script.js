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

function sanitize (arr){
  sanArr = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      sanArr.push(arr[i]);
    }
  } 
  return sanArr;  
}

sanitize(hangmanWords);

function chooseWord (arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  randomWord = arr[randomNum];
  return randomWord;
}

chooseWord(sanArr);

underscoreNum = parseInt(randomWord.length);


function underscoreGen() {
  underscoreLength = "";
  
  for (i = 0; i < randomWord.length; i++) {

  underscoreLength += "_ ";
  }
}

underscoreGen();

document.querySelector('.game-word').textContent = underscoreLength;

var btn = document.querySelector('button');

var userGuess = document.querySelector('input');




























