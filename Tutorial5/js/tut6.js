const word= prompt("please enter a word. view console for stats");
console.log("You enterd ", word);
console.log("word in lower case is ", word.toLowerCase);
console.log("word in upper case is ", word.toUpperCase);

if(word.toLowerCase.indexOf("e")=== -1){
    console.log(`Your word does not contain an "e"`);
}
else{
    console.log(`Your word contains an "e"`);
}