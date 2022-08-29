/// 1. odevim dort islem hesap makinesi
const s1 = +prompt("1 sayi giriniz");
const s2 = +prompt("ikinci sayiyi girin;");
const islem =propmt("islemi giriniz:+,-,*,/");
let netice = 0;
switch (islem){
case "+" :
    netice = s1+s2;
    break;
case "-" :
    netice = s1-s2;
    break;
case "*":
    netice = s1 * s2;
    break;
case "/":
    netice = s1/s2;
    break;
    default:
        alert("yanlis islem giris");
} /// bu soruda kullanicidan once iki sayi giri alip
// islem degiskenin herbir farkli durumu icin islemler yaptirdik
            
