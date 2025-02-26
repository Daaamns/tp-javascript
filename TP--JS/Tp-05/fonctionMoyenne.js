function calculMoyenne(tab) {
  if (!Array.isArray(tab)) {
    return "Erreur : l'entrée doit être un tableau.";
  }

  if (tab.length === 0) {
    return 0;
  }

  if (!tab.every((element) => typeof element === "number")) {
    return "Erreur : le tableau contient un élément non numérique.";
  }

  let somme = tab.reduce((acc, val) => acc + val, 0);
  return somme / tab.length;
}

let tableau1 = [10, 20, 30, 40, 50];
let tableau2 = [];
let tableau3 = [10, "test", 30];
let tableau4 = "Ceci n'est pas un tableau";

console.log(calculMoyenne(tableau1));
console.log(calculMoyenne(tableau2));
console.log(calculMoyenne(tableau3));
console.log(calculMoyenne(tableau4));
