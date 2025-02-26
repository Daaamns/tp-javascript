let tableau = [1, 2, 3, 4, 6];
let premierOuDernierEst6 =
  tableau[0] === 6 && tableau[tableau.length - 1] === 6;

console.log(tableau.length > 0 && premierOuDernierEst6);
