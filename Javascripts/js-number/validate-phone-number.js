const phoneNumber = "+97688299218";

let areaCode = phoneNumber.substring(0, 4);

if (Number(phoneNumber) && areaCode === "+976" && phoneNumber.length === 12) {
  console.log("Зөв дугаар");
} else {
  console.log("Буруу дугаар");
}
