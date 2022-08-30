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
// const gun = prompt("lutfen bir gun giriniz:").toLowerCase ();
// switch (gun) {
//     case "pazartesi":
//     case "sali":
//     case "sali":
//     case "carsamba":
//     case "persembe":
//        console.log("inclass");
//        break;
//      case "cuma":
//          console.log("teamwork");
//          break;
//      default:
//          console.log("yanlis gun girdiniz");              

// }
// ODEV :Maasi asgari ucretten az olanlara % 50 fazla olankara
// %10 zam yapan program
// const maas = Number(prompt("Maasinizi giriniz"));
// const asgariUcret = 5500;
// const zamliMaas = maas >= asgariUcret ? maas * 1.1 : maas * 1.5;
// console.log("NORMAL MAAS:", maas, "ZAMLI MAAS:", Math.trunc(zamliMaas));
//!ODEV4: Kredi Risk Programı
//? Console’dan kişinin gelir ve gider miktarını alan
//? eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//? değilse Kredi Verilemez 🥺
//? şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.
let gider = Number(prompt("lutfen giderinizi yazin"));
let gelir = Number(prompt("gelirinizi yazin"));
const kredi = gelir - gider >= 5000 ?"kredi alabilir" : "kredi alamaz ";
