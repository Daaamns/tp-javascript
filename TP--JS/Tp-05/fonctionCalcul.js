function resultatNum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Erreur : les paramètres doivent être des nombres.";
  }
  return a * b + a + b;
}

console.log(resultatNum("yo", "banane"));
console.log(resultatNum(4, 2));
