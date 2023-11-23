const mayişlar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
const toplamMayiş = mayişlar.reduce((toplam, deger) => toplam + deger, 0);
console.log("TOPLAM MAYIŞ:", toplamMayiş);

const zamliMaasToplami = mayişlar
  .filter((m) => m >= 6000 && m <= 10000)
  .map((m) => m * 1.1)
  .reduce((t, m) => t + m);
console.log("ZAMLI MAASLAR:", zamliMaasToplami);
