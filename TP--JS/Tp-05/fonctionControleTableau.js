function controleTableau(tab) {
  return tab.every((element) => typeof element === "number");
}

let tableau1 = [1, 2, 3, 4, 5];
let tableau2 = [1, "hello", 3, 4, 5];
let tableau3 = [];

console.log(controleTableau(tableau1));
console.log(controleTableau(tableau2));
console.log(controleTableau(tableau3));
