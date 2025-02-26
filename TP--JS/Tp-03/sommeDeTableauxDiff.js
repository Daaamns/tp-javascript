let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let arraySomme = [];

let maxLength = Math.max(array1.length, array2.length);
for (let i = 0; i < maxLength; i++) {
  let val1 = array1[i] || 0;
  let val2 = array2[i] || 0;
  arraySomme.push(val1 + val2);
}

console.log("Somme des tableaux avec différence de taille :", arraySomme);
