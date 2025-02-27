function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "Erreur : Veuillez entrer une chaîne de caractères non vide.";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeEachWord(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    return "Erreur : Veuillez entrer une chaîne de caractères non vide.";
  }

  return sentence
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
}

// Tests
console.log(capitalizeEachWord("bonjour tout le monde")); // "Bonjour Tout Le Monde"
console.log(capitalizeEachWord("hello world"));
console.log(capitalizeEachWord(""));
console.log(capitalizeEachWord(123));
