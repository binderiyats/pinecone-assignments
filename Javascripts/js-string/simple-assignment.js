// 1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз.
const firstName = "Binderiya";
const lastName = "Tsogt";

const result =
  firstName.length > lastName.length
    ? "Нэр илүү их үсэгтэй"
    : "Овог их үсэгтэй";
console.log(result);

// 2. Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.
console.log(firstName.toLowerCase(), lastName.toLowerCase());

// 3. Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.
console.log(firstName.toUpperCase(), lastName.toUpperCase());

// 4. 'Pinecone academy- н' болон ' leap хөтөлбөрт тавтай морилго уу? ' - г нэг мөр болгон нэгтгэнэ үү. “concat()”
const text1 = "Pinecone academy";
const text2 = " leap хөтөлбөрт тавтай морилго уу?";

const Result = text1.concat(text2);
console.log(Result);

// 5. firstName, LastName, country, city, age, job хувьсагч зарлан эдгээр хувьсагч орсон өгүүлбэр зохионо уу. Жишээ нь:  Намайг Болд гэдэг. Би Сүхбаатар дүүрэгт амьдардаг.  гэх мэт

const country = "Mongolia";
const age = 22;
const city = "Ulaanbaatar";
const job = "Software-Engineer";

console.log(
  `My name is ${firstName}. I live in ${city} city ${city}. I am ${job}`
);

//6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.
console.log("\t1 2 3 4 5\n\t2 3 4 5 1\n\t3 4 5 1 2\n\t4 5 1 2 3\n\t5 1 2 3 4");
