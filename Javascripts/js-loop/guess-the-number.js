// 1. 1-100 ийн хооронд random оор 1 утга авдаг randomNumber гэсэн variable зарлана уу.
// 2. Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээргэй.
// 3. Хэрвээ prompt - оос авсан утга нь randomNumber оос их бол "таны оруулсан тоо их байна" г.м чиглүүлэх маягаар хэвлэдэг байх.

const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = false;

while (!guess) {
  let input = Number(prompt("Enter a number: "));
  if (input === randomNumber) {
    alert("Зөв таалаа!");
    guess = true;
  } else if (input > randomNumber) {
    alert("Оруулсан тоо их байна!");
  } else {
    alert("Оруулсан тоо бага байна!");
  }
}
