// 1. Вывод нечетных чисел массива
let arr = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
arr.forEach(function (item) {
  if (item % 2 !== 0) {
    console.log(item);
  }
});

console.log(arr.forEach);
// End.

console.log("///////////");

// 2. Вывод объектов массива, длина которых не >4 символов.
let lang = [
  "lorem ipsum",
  "javascript",
  "php",
  "css",
  "react",
  "git",
  "html",
  "mysql",
];

let arr2 = lang.filter((item) => {
  if (item.length <= 4) {
    console.log(item);
  }
});
console.log(arr2);
// End.

console.log("///////////");

// 3. Вывести отрицательные элементы из массива.
let arr3 = [1, -3, 5, 6, -7, 8, 9, -11];
let otric = arr3.filter((item) => {
  if (item < 0) {
    console.log(item);
  }
});
console.log(arr3);
// End.

console.log("///////////");

// 4. Вывод четных элементов массива
let arr4 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
arr4.forEach(function (item) {
  if (item % 2 == 0) {
    console.log(item);
  }
});
// End.

console.log("///////////");

// 5. Вывод объектов массива, длина которых не равна 3-м символам.
let language = [
  "lorem ipsum",
  "javascript",
  "php",
  "css",
  "react",
  "git",
  "html",
  "mysql",
];

let arr5 = language.filter((item) => {
  if (item.length != 3) {
    console.log(item);
  }
});
console.log(arr5);
// End.

console.log("///////////");

// 6. Вывести новый массив состоящий из квадратов чисел.
let numbers = [5, 6, 7, 8, 9];
let kvadrat = numbers.map(function (item) {
  return item * item;
});
console.log(kvadrat);
// End.

console.log("///////////");

// 7. Вывести новый массив с суммой свойств объекта.
let arr6 = [
  { a: 10, b: 5 },
  { a: 20, b: 22 },
  { a: 131, b: 55 },
];

let sumArr = arr6.map((item) => {
  return item.a + item.b;
});

console.log(sumArr);
// End.

console.log("///////////");

// 8. Сумма всех отрицательных чисел массива.
let number = [-13, 0, 12, 1662, -0.32, -102, -2];

let negNumber = number.filter((item) => item < 0);

let sumNegative = negNumber.reduce((sum, item, index, arr) => {
  return sum + item;
});
console.log(sumNegative);
// End.

console.log("///////////");

// 9. Сумма элементов X из массива.

let arr9 = [
  { x: 10, y: "lorem" },
  { x: 21, y: "lorem" },
  { x: -17, y: "lorem" },
  { x: 156, y: "lorem" },
];

let sum = arr9.reduce((summa, item) => {
  return summa + item.x;
}, 0);

console.log(sum);
