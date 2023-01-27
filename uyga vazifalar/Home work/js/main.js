// let a = 1, b = 1;
// let c = ++a; // a bizda 1 ga teng. a dan oldingi + ishorasi yana bita oshgani uchun a teng boladi 2 ga shunda bizda javob c=2 bo'ladi.
// let d = b++; // b esa 1 ga teng. shunda javob d=1.
// console.log(c);
// console.log(d);


// 3 - Assinment result
// let a=2; // a bizda 2 ga teng bo'lmoqda.
// let x=1+(a*=2); // birinchi bo'lib qavsni ichi bajariladi qavsdagi javob 4 ni beradi shunda 1+4=5 xni javob 5 ga teng bo'ladi
// console.log(x); 

// 4- type Conversion

// let a = "" + 1 + 0; // bu yerda sting qatnashganligi uchun 10 javob chiqarib beradi 
// let b = "" - 1 + 0; // minus ishlatganimiz uchun -1 chiqadi
// console.log(true + false); // bu yerda true 1 ga teng flase 0ga teng 1+0=1 
// let c = 6 / 3 // javob 2 chiqadi
// let v = "2" + "3";// bu yerda data type number bo'ladi javob 6. 
// let n = 4 + 5 + "px"; // + amali berilganda data type string bo'lib chiqadi va string oxirida kelgani uchun 4+5=9 bolib chiqadi javob 9px.
// let m = "$" + 4 + 5; // + amali berilganda data type string bo'lib chiqadistring boshida kelgani uchun 4+5=45 bolib chiqadi.
// let s = "4" - 2 // minus ishorasi bo'lgani uchun javob 2 chiqadi yani data type string qaytarmaydi
// let d = "4px" - 2 // Not a number yani javob NaN chiqadi text ni songa ayirib bo'lmaydi.
// let f = " -9 " - 5 // ikkita " - " ishorasi berilsa sonlar bir birga qoshiladi birinchi ishora oldinga o'tadi yani -14
// let g = " -9 " + 5 // data type stirng bolib qoladi chunki "+" ishorasi borligi uchun javob -9 5 chiqadi.
// console.log(null + 1); // javobi 1 chiaqdi.
// console.log(undefined + 1); // undifined son emas shuning uchun javob NaN.
// let h="\t\n"-2;// javob -2 chunki "-" ishlatganimiz uchun stirng ishlamaydi.
// console.log(a, b, c, v, n, m, s, d, f, g,h);

//  5- Comparisons

// let a = 5 > 4; // true
// let s = "apple" > "pineapple" //false

// console.log("12" > "2"); //bu yerda false qataradi sababi string ichida malumot kiritilsa birchi malumotga qarap javob qaytadi yani 12=1 bolib qoladi 2=2 boladi
// console.log(undefined == null);  null qiymatga ega undefined ummuman qiymatga ega emas
// console.log(undefined === null); bu yerda false qatiy tenglik bo'lgani uchun 
// console.log(null == "\n0\n");  false
// console.log(null === "\n0\n");  false
