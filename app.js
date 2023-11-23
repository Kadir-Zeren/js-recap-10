// const mayişlar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
// const toplamMayiş = mayişlar.reduce((toplam, deger) => toplam + deger, 0);
// console.log("TOPLAM MAYIŞ:", toplamMayiş);

// const zamliMaasToplami = mayişlar
//   .filter((m) => m >= 6000 && m <= 10000)
//   .map((m) => m * 1.1)
//   .reduce((t, m) => t + m);
// console.log("ZAMLI MAASLAR:", zamliMaasToplami);

const ages = [18, 22, 78, 34, 78, 79, 15];
const check = ages.every((age) => age >= 18);
check ? console.log("All ages are over 18") : console.log("Sum are under 18");

const over80 = ages.some((a) => a >= 80);
console.log(over80);

const ageBigThan30First = ages.find((age) => age >= 30);
const ageBigThan30Last = ages.findLast((age) => age >= 30);
console.log(ageBigThan30First, ageBigThan30Last);

console.log(ages.find((age) => age >= 80));
