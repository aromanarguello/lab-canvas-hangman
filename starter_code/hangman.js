var hangman;

function Hangman() {
	this.words = ['cat', 'apple', 'bird'];
	this.secretWord = 'secretWord';
	this.letters = [];
	// this.guessedLetter = "";
	// this.errorsLeft = errorsLeft;
}


Hangman.prototype._getWord = function () {
	return this.secretWord;
};

Hangman.prototype._checkIfLetter = function(keyCode) {
	if ( keyCode >= 65 && keyCode <= 90 ) {
		return true;
	} else {
		return false;
	}
};

Hangman.prototype._checkClickedLetters = function(key) {
		// 'key' represents a string letter: P F R N

    // console.log(key);
    // console.log(this.letters);
    // console.log(this.letters === key);
    //
    if (this.letters === key) {
      return true;
    }
    if (this.letters !== key) {
      return false;
    }





};

Hangman.prototype._addCorrectLetter = function(i){

};

Hangman.prototype._addWrongLetter = function (letter){

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
