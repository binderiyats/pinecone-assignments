// 1. 10 хүртэлх натурал тоог хэвлэх программ бич
const number = 10;
let i = 1;
while (i <= number) {
  console.log(i);
  i++;
}

// 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
const number2 = 10;
let i2 = 1;

while (i2 <= number2) {
  console.log(i2);
  i2 += 2;
}

// 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
const number3 = 10;
let i3 = 2;

while (i3 <= number3) {
  console.log(i3);
  i3 += 2;
}

// 4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
const number4 = 100;
let i4 = 1;
let sum = 0;
while (i < number4) {
  sum += i4;
  i4++;
}

console.log(i4);

// 5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич
const number5 = 100;
let i5 = 1;
let sum1 = 0;

while (i5 <= number5) {
  console.log(i5);
  sum += i5;
  i5++;
}

// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич
const n = 13;
let j = 2;
let isPrimeNumber = true;

while (j <= n / 2) {
  if (n % j === 0) {
    isPrimeNumber = false;
    j++;
  }
}

if (isPrimeNumber === true) {
  console.log("Yes");
} else {
  console.log("No");
}

// 7. Өгөгдсөн интервал дахь анхны тоог хэвлэх программ бич
const n1 = 10;
let i6 = 1;

while (i6 <= n1) {
  let j = 2,
    isPrime = true;

  while (j <= i6 / 2) {
    if (i6 % j === 0) isPrime = false;
    j++;
  }

  if (isPrime) console.log(i6);

  i6++;
}

// 8. N тооны факториал олох программ бич

const n7 = 77;
let factorialNum = 1;
let i7 = 1;

while (i7 <= n7) {
  factorialNum *= i7;
  i7++;
}

console.log(factorialNum);

// 9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич
const n8 = 16;
let sumOfN8 = 0;
let str = n8 + "";
let i8 = 0;

while (i8 < str.length) {
  sumOfN8 += Number(str.charAt(i8));
  i8++;
}
console.log(sumOfN8);

// 10. N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
const n9 = 100;
let sumOfN9 = 0;
let i9 = 1;

while (i9 <= n9) {
  console.log(i9);
  sum += i9;
  i9 += 2;
}

// 11. N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич
const n10 = 100;
let sumOfN10 = 0,
  i10 = 2;

while (i10 <= i10) {
  console.log(i10);
  sum += i10;
  i10 += 2;
}

// 12. Өгөгдсөн  эерэг тооны урвууг хэвлэх программ бич // 123 <=> 321
let n11 = 123,
  reversedNum = 0;

while (n11 > 0) {
  reversedNum = reversedNum * 10 + (n11 % 10);
  n11 = Math.floor(n11 / 10);
}
console.log(reversedNum);

// 13. Өгөдсөн тооны цифрүүдийг үгээр хэвлэх программ бич
let n12 = 456,
  result = "",
  str12 = n12 + "",
  i12 = 0;

while (i12 < str12.length) {
  switch (str12.charAt(i12)) {
    case "1":
      result += "нэг ";
      break;
    case "2":
      result += "хоёр ";
      break;
    case "3":
      result += "гурав ";
      break;
    case "4":
      result += "дөрөв ";
      break;
    case "5":
      result += "тав ";
      break;
    case "6":
      result += "зургаа ";
      break;
    case "7":
      result += "долоо ";
      break;
    case "8":
      result += "найм ";
      break;
    case "9":
      result += "ес ";
      break;
    case "0":
      result += "тэг ";
      break;
    default:
      break;
  }

  i12++;
}

console.log(result);
