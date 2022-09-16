//// FONKSIYONLAR ///
// fonksiyon birsey dondurmuyorsa funcksiyon olarak gecer baska dillerde bu void fonksiyon olarak gecer 
// fonksiyon sadece primitive yapi degil obje de dondurebilir 2.yontemde 1. fark fonksiyon isimsiz sadece buna bir deger gibi degiskene aktariyorua
/// 2.yontemde once fonksiyon tanimlanir sonra cagrilir hazir degiskene aktarilip kullanilir burda hoisting olmaz degisken mantigi gibi dusunulebilr 
///ilk yontemde fonksiyon  bellekte tutuluyor kullansak da kullanmasak ta arrow fonk da bazi durumlarda return olmak zorunda degil fonksiyon cagrildigi yere bir sey gondermesi gerekiyorsa return olmak zorunda 
// 3.YONTEM ARROW FONSIYONLAR
//SYNTAX I let fonkADI =(arg1,arg2)=> expression
// burasa funksiyon keyi kulllanilmiyor 
//syntaxi = const topla = (a,b)=> a+b bu fonksiyonun cagrildigi yere deger dondurmesi gerekir mantiken clg((2,3)) return yok aslinda dondurmez gibi gorunuyor ama arrow f de otomatik return ozelligui var
// tek ifadelik islemlerde return kulllanmaya gerek olmadigindan islemi basitlestirir 
// const usAl = (taban,us ) => taban**us burada usAL(2,3) 8 i bize vercektir suslu yok return yok oldugu gibi bize dondurecektir 
// const yazdir =()=> clg ("hi") parametresizde olabilir tek bir ifadede return kelimesine gerek yok birden fazla ifademiz varsa ne olacak 
// const hesapla = (x,y,islem) => eger burada tek bir ifade ise susluye paranteze return e gerek yok ama birden fazla olursa soyle olur{
    // if (islem === "+"){
        // ifelse

    //}

// return sonuc : burada if -else blogu tek bir statement
//} funksiyon expression yontemi gibi oluyor arrow => var fonk keywordu yok eger bir if blogu for swccase tekbir islemdir bunlara susluye gerek yok suslu kullanirsaniz muhakkak return zorunlu
// fonksiyon tek bir deger dondurur return cogunlukla sonda olur expression da tek ifadede olsa return olmak zorunda 
// arrro f suslu parantezi gorudunde otomatik return arar suslu varsa return zorunlu ama icinde birsey dondurmesi gerekmiyorsa returne gerek yok
// arrow funklar this anahtar kelimesi ile kullanilamiyor oop yapisinda this keyw du onem arz eder arrow f bircok acidan olumlu dezavantj this keyw du kullanilmaiyir 
//  ARROW FUNCTIONLAR ILE ILGILI ORNEKLER
// yaricap ve yuksekligi girilen silindirin hacmini hesaplamak
// const r = number(prompt ("yaicap giriiniz"))
// const h = number(prompt("yukseklik giriniz"))
// const  hacimHesapla = (r,h)=> Math.P *r *r *h; bu kadar otomatikm return yapar
// clg(`${r},${h}=> hacmi: ${r,h}`); 
// mesela bu islemi virgunlden sonra iki basamak olarak almak isteseydik tofixed kullanilabilir hacimHesapla cagrildiginda bir deger doner burdan
// toExponent dersek 10 uzeri cinsten gelir tofixed dersek ayni ifadeyi stringe cevirir ve sadece iki basamagi alir
//