// Comments can make code readable
// Javascript lesson begin
/*Comments can make code readable */

// Нэг мөрөнд хувьсагч зарлах
// const firstName = "Binderiya",
//   lastName = "Tsogt",
//   maritalStatus = false,
//   country = "Mongolia",
//   age = 22;

// Олон мөрөнд хувьсагч зарлах
const firstName = "Binderiya";
const lastName = "Tsogt";
const maritalStatus = false;
const country = "Mongolia";
const age = 22;

//Гурвалжингийн периметрийг олох
const a = 10;
const b = 20;
const c = 15;
const trianglePeremeter = a + b + c;

console.log(trianglePeremeter);

// Тойргийн талбайг олох
const radius = 3;
const area = Math.floor(Math.PI * Math.pow(radius, 2));
console.log(area);

//m = y2-y1/x2-x1 хариуг олох
const x = 3;
const y = 3;
const m = (y * y - y) / (x * x - x);
console.log(m);

//15 Gigabyte нь хэдэн bit-тэй тэнцүү вэ ?
const gigabyte = 8589934592;
console.log(15 * gigabyte);

//15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
const megaByte = 1000000;
const sizeOfBits = 15 * megaByte;
const length = 3;
const bitRate = sizeOfBits / length;
console.log(bitRate);

//side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.
const side1 = 5;
const side2 = 4;
const side3 = 6;
const s = (side1 + side2 + side3) / 2;

const triangleArea = Math.round(
  Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
);
console.log(triangleArea);

//Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.
const Celsuis = 18;
const Fahrenheit = Celsuis * (9 / 5) + 32;
console.log(Fahrenheit);

// Өгсөн тоог фаренгейтээс цельс рүү хөрвүүл.
const fahrenheit = 64.4;
const celsuis = (fahrenheit - 32) * (5 / 9);
console.log(celsuis);

// 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул: Өгөгдсөн 2 тооны нийлбэр нь 25, Өгөгдсөн 2 тооны ялгавар нь 5.
const num1 = 12;
const num2 = 12;
console.log(`Өгөгдсөн 2 тооны нийлбэр ${num1 + num2}`);
console.log(`Өгөгдсөн 2 тооны ялгавар ${num1 - num2}`);
console.log(`Өгөгдсөн 2 тооны үржвэр ${num1 * num2}`);
console.log(`Өгөгдсөн 2 тооны ноогдвор ${num1 / num2}`);
console.log(`Өгөгдсөн 2 тооны ноогдворын үлдэгдэл ${num1 % num2}`);

// cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх
const centimeter = 10;
const inch = Math.round(centimeter * 0.393701);
console.log(`${centimeter} cm equals to ${inch} inches`);

const inches = 4;
const centimeters = Math.round(inches / 0.393701);
console.log(`${inches} inches equals to ${centimeters}`);

// Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.

const r = 5;
const circleArea = Math.floor(Math.PI * Math.pow(r, 2));
console.log(`Area of the circle is ${circleArea}`);

const circleCircumference = 2 * Math.round(Math.PI) * r;
console.log(`Area of the circumference is ${circleCircumference}`);

// 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич
let number = 260;
number = number - (number % 10);
number = number / 10;
number = number - (number % 10);
number = number / 10;
console.log(number);

let baby = "Baby Shark";
let daddy = " Daddy Shark";
let mommy = " Mommy Shark";
let grandma = " Grandma Shark";
let grandpa = " Grandpa Shark";
let doo = "doo-doo, doo-doo";
let lets = "Let's go hunt";
let run = "Run away";
let safe = "Safe at last";
let end = "It's the end";
console.log(baby + ", " + doo);
console.log(baby + ", " + doo);
console.log(baby + ", " + doo);
console.log(baby);
console.log(mommy + ", " + doo);
console.log(mommy + ", " + doo);
console.log(mommy + ", " + doo);
console.log(mommy);
console.log(daddy + ", " + doo);
console.log(daddy + ", " + doo);
console.log(daddy + ", " + doo);
console.log(daddy);
console.log(grandma + ", " + doo);
console.log(grandma + ", " + doo);
console.log(grandma + ", " + doo);
console.log(grandma);
console.log(grandpa + ", " + doo);
console.log(grandpa + ", " + doo);
console.log(grandpa + ", " + doo);
console.log(grandpa);
console.log(lets + ", " + doo);
console.log(lets + ", " + doo);
console.log(lets + ", " + doo);
console.log(lets);
console.log(run + ", " + doo);
console.log(run + ", " + doo);
console.log(run + ", " + doo);
console.log(run);
console.log(safe + ", " + doo);
console.log(safe + ", " + doo);
console.log(safe + ", " + doo);
console.log(safe);
console.log(end + ", " + doo);
console.log(end + ", " + doo);
console.log(end + ", " + doo);
console.log(end);
