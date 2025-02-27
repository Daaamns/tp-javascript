function calculMoyenne(tab) {
  if (!Array.isArray(tab)) {
    throw new Error("Erreur : l'entrée doit être un tableau.");
  }

  if (tab.length === 0) {
    return 0;
  }

  if (!tab.every((element) => typeof element === "number")) {
    throw new Error("Erreur : le tableau contient un élément non numérique.");
  }

  let somme = tab.reduce((acc, val) => acc + val, 0);
  return somme / tab.length;
}

let tableau1 = [10, 20, 30, 40, 50];
let tableau2 = [];
let tableau3 = [10, "test", 30];
let tableau4 = "Ceci n'est pas un tableau";

function testerMoyenne(tab) {
  try {
    const moyenne = calculMoyenne(tab);
    console.log(`La moyenne de [${tab}] est : ${moyenne}`);
  } catch (error) {
    console.error(error.message);
  }
}

testerMoyenne(tableau1);
testerMoyenne(tableau2);
testerMoyenne(tableau3);
testerMoyenne(tableau4);
