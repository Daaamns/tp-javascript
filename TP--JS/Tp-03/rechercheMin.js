let array = [1, 15, -3, 0, 8, 7, 4, -20, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let min = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

console.log("Le plus petit élément est :", min);
