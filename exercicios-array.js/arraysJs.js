
let array = new Array(30);

for (let i = 0; i < array.length; i++) {
  array[i] = i + 23;
}

console.log(array);

array.forEach(element => console.log(element));