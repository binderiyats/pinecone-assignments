// Гараас огноо, сар, өдөр гэсэн утгуудыг аван дараах форматын дагуу харуулна уу. Жишээ 2009, 12, 31 гэж орж ирвэл “2009-12-31”. Анхаарах зүйл хэрвээ өдөр, сар нэг оронтой байвал 2 оронтой болгох буюу сар нь  1 гэж байвал “01” болгох, гараас оруулж байгаа утгыг шалгах
const year = 2022;
const month = 11;
const date = 30;

let strMonth = month >= 10 ? month : "0" + month;

console.log(`${year}-${strMonth}-${date}`);

//Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх
const phoneNumber = "99001234",
  firstTwo = Number(phoneNumber.substring(0, 2));

switch (firstTwo) {
  case 99:
    console.log("Mobicom");
    break;
  case 88:
    console.log("Unitel");
    break;
  case 96:
    console.log("Skytel");
    break;
  case 60:
    console.log("Ondo");
    break;
  default:
    console.log("буруу дугаар байна");
}
