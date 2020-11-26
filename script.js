// Use the skeleton bellow as a basis for your script
var generateBtn = document.querySelector("#magic-btn");
function makeSomeMagic() {
   confirm("Do I like to do sports?");
   confirm("Do I like to make puzzles?");
   confirm("Do I like pets?");
   confirm("Do I like pizza?");
   confirm("Do I like to draw or to read?");
   confirm("am I a morning person or a evening one");

}


function displayMagicPhrase() {
 
  var magicPhrase = makeSomeMagic();
  magicPhrase = "Your future is doomed. But hey you can always try again :)";
  var magicPhraseDisplay = document.querySelector("#magic-phrase");

  magicPhraseDisplay.value = magicPhrase;
}

// Attach event listener to the magi button
generateBtn.addEventListener("click", displayMagicPhrase);
