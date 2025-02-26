function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "Erreur : Veuillez entrer une chaîne de caractères non vide.";
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("bonjour"));
console.log(capitalizeFirstLetter("hello world"));
console.log(capitalizeFirstLetter(""));
console.log(capitalizeFirstLetter(123));
