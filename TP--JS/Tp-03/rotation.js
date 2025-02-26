let numbers = [0, 1, 2, 3];

function rotateRight(array) {
  if (array.length === 0) return array;
  let lastElement = array.pop();
  array.unshift(lastElement);
  return array;
}

console.log(rotateRight(numbers));
