/// 1. odevim dort islem hesap makinesi
// const s1 = +prompt("1 sayi giriniz");
// const s2 = +prompt("ikinci sayiyi girin;");
// const islem =prompt("islemi giriniz:+,-,*,/");
// let netice = 0;
// switch (islem){
// case "+" :
//     netice = s1+s2;
//     break;
// case "-" :
//     netice = s1-s2;
//     break;
// case "*":
//     netice = s1 * s2;
//     break;
// case "/":
//     netice = s1/s2;
//     break;
//     default:
//         alert("yanlis islem giris");
//} /// bu soruda kullanicidan once iki sayi giri alip
// islem degiskenin herbir farkli durumu icin islemler yaptirdik
            
/// Odev 2 haftalik calisma programini swich case yapisi ile olusturma
const gun = prompt("lutfen bir gun giriniz:").toLowerCase
switch (gun) {
    case "pazartesi":
    case "sali":
    case "sali":
    case "carsamba":
    case "persembe":
       console.log("inclass");
       break;
     case "cuma":
         console.log("teamwork");
         break;
     default:
         console.log("yanlis gun girdiniz");              

}