function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function bubbleSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

const arr = [5, 4, 3, 1];
const n = arr.length;
bubbleSort(arr, n);
console.log(arr);

// const n = 10;
// let result = 0;
// for (let i = 0; i <= n; i++) result += i;

// console.log(result);

// recursive
// function sum(n) {
//   if (n === 0) return 0;
//   return n + sum(n - 1);
// }

// const n = 10;
// console.log(sum(n));
