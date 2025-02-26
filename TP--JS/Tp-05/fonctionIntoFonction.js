function createMultiplier(n) {
  return function (nb) {
    return nb * n;
  };
}
const multiplyBy2 = createMultiplier(2);
const multiplyBy5 = createMultiplier(5);

console.log(multiplyBy2(10));
console.log(multiplyBy5(4));
console.log(multiplyBy2(7));
console.log(multiplyBy5(3));
