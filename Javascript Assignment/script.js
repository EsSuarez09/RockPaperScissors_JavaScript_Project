const nouns = ["cat", "dog", "bird", "tree", "house"];
const verbs = ["jumped", "ran", "flew", "grew", "built"];
const adjectives = ["beautiful", "big", "red", "happy", "loud"];
const places = ["park", "beach", "forest", "city", "mountain"];

function generatePhrase() {
 const randomNoun = getRandomWord(nouns);
 const randomVerb = getRandomWord(verbs);
 const randomAdjective = getRandomWord(adjectives);
 const randomPlace = getRandomWord(places);
 
 const phrase = `${randomNoun} ${randomVerb} ${randomAdjective} ${randomPlace}`;
 
 document.getElementById("phrase").textContent = phrase;
}

function getRandomWord(wordArray) {
 const randomIndex = Math.floor(Math.random() * wordArray.length);
 return wordArray[randomIndex];
}