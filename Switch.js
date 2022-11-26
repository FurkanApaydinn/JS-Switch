// const gün = "çarşamba";

// switch (gün) {
//   case "pazartesi": //gün===pazartesi
//     console.log("kurs planlaması yap");
//     console.log("Sabah Toplantısı");
//     break;
//   case "salı":
//     console.log("Spora git");
//     break;
//   case "Çarşamba":
//     s;
//   case "perşembe":
//     console.log("Yemek Hazırla");
//     break;
//   case "cuma":
//     console.log("Dinlen");
//     break;
//   case "Cumartesi":
//   case "Pazar":
//     console.log("Haftasonu tadını çıkar");
//     break;
//   default:
//     console.log("Geçerli bir gün değil");
// }

// if (gün === "pazartesi") {
//   console.log("Haftanın ilk günü");
// } else if (gün === "salı") {
//   console.log("Pazartesi");
// } else if (gün == "çarşamba" || gün === "perşembe") {
//   console.log("çarşamba veya perşembe");
// } else if (gün === "cuma" || gün === "cumartesi") {
//   console.log("cuma veya cumartesi");
// } else if (gün === "pazar") {
//   console.log("dinlen");
// } else {
//   console.log("geçerli bir gün değil");
// }
// if (gün === ("çarşamba" || "perşembe")) {
//   console.log("hello");
// }
// const değer = Math.floor(Math.random() * 5); // o ve 4 aralığında rasgele sayı oluşturur.
// switch (değer) {
//   case 0:
//     console.log("Sayımız sıfır");
//     break;
//   case 1:
//     console.log("Sayınız bir");
//     break;
//   case 2:
//     console.log("Sayınız iki");
//     break;
//   case 3:
//     console.log("sayınız üç");
//     break;
//   case 4:
//     console.log("sayınız dört");
//     break;
//   default:
//     console.log("Sayı aralıkta değil");
// }

// let değer1 = 7;
// if (değer1 > 5) {
//   //bir şeyler yaz
// }

// switch (değer1) {
//   case 6:
//     console.log("sayı 6");
//     break;
//   case 7:
//     console.log("sayı 7");
//     break;
//   default:
//     console.log("Aralık dışı");
// }

// Switch Challanges
// const dil = "ingilizce";
// switch (dil) {
//   case "mandarin":
//   case "ispanyolca":
//     console.log("Çok fazla konuşuluyor");
//     break;
//   case "ingilizce":
//     console.log("3.sıra");
//     break;
//   case "hintçe":
//     console.log("4.sıra");
//     break;
//   case "arapça":
//     console.log("en çok konuşulan 5.dil");
//     break;
//   default:
//     console.log("Harika bir dil");
// }

//Statement & Expression
//expression değer varsa
// 3 + 4;
// 1986;
// true && false && !false;
// //Statement kod satırını kapsar
// if (23 > 10) {
//   const str = "23 büyük";
// }

//Ternary Operator -- koşullu operatör

const yaş = 15;
yaş >= 18
  ? console.log("araba kullanabilirsin ")
  : console.log("araba kullanamazsın");

const araba = yaş >= 18 ? "araba sürebilir" : "süremez";
console.log(araba);

console.log(`Bu yaşta ${yaş >= 18 ? "araba sürebilir" : "arkaya geç"}`);

const ulkeNüfus = 33;
const ulkeİsmi = "italya";

console.log(
  `${ulkeİsmi}'nın nüfusu ortlamanın ${
    ulkeNüfus >= 30 ? " üstünde" : "italyanın  altında"
  }`
);
