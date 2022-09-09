//// SASS DERSI //
// SASS VE SCSS arasindaki fark su sass da ruby dili ile yazidligi icin suslu vs yok ama genelde insasnlar scss kullaniyorlar syntaxdan dolayi
// suslu ve noktali virgul oldugu icin node js enviromenti scss i css e ceviriri
// node js browserda calisan javascript motorunun locale inmis hali java s uygulamalarini browser olmadam kulalnabiiriz
//sass ve scss icice yapiyi destekler sass yazip klasik moda cevrildi
// derleyici durdurursak degisiklikler gelmez artik css on islemcisi denebilir 
// css den ayri birsey bu css hiyerarsik bicimde style yapmayi saglar sass ve scss css in eksiklikleerini gidermek adina gelistirilne bir dil
// yenir bir derleyici olustiuldu bizim sass da yazdigimiz kodlari duz css e ceviriyor browserlar css den birsey anlamaz sass la yazilan her uyglama scss e cevrilmeli 
// node.js ve onun uzerine calisan sass ekledik 
// sass ve scss bir preposordur aslinda sass neden kullaniliyor bazi nuanslairndan dolaui kullaniliyor 
// duz css yerine sass kullanmak daha iyi olabiliyor bosstrap bir kutuphane hazir classlari olan responsive tasarimda kullanilan classlar isimizi kolaylastiryor sass da kutuphane yok biz kensimiz yaziyoruz daha guzel kod yazmaya izin veriyor sass
// buyuk firmalar genelde kendi style larini yapiyorlar bu gibi ortamlarda sass kulanmak mantikli 
//buyuk projelerde bir derleyici kullaniyorlar 
/// sass variable kullanimina izin verir $ ile tanimlayip kullanabiliriz ama sass derleycisi onu css e ceviriyot 
// nesting ic ice kullanima izin verir
// parcalama yani modullere ayirma normalde css de modul var ama sass da daha pratik
// butun kodlarimizi tek bir dosyaya koymamiza gerek yok bunlari bolebilriz ayri ayri dosya yapip birlestirebiliriz
// css parcalndigindaa degiskenlerde sorun olabiliyir style lar birbirine karisabiliyor onune bir undersore koymak zorunlu derleyicinin bunun modul oldugunu anlamasi icin onune alt cizgi koyuyoruz da
// daha sonra bunlari @use import forwardde birlestirebiliriz use un soyle bir guzelligi var use ile biz bir ad uzeyi olusturp ayni isimleri tekrar tekrar kullanabiliyoruz
// modullere ayiriyoruz daha sonrasinda kullanmak uzere rule lar ile ekleyip birlestiriyoruz
// import rule u kaldirilmaya calisiliyor 
// MIXIN aslinda bu fonsiyon demek @mixin yaziyoruz icine parametre alabilir yada alamayabilir mixin le declare edip @include ile cagiriyourz
// bir defa tanilayop istedigimiz classda cagirabiliriz 
// EXTEND mixinden farkli bir style olusturuyoruz bunu baska yerde aynen kullanmak istiyoruz 
// @extend diyip yaptigimiz style i kullanabikir=z ama uzerie degisiklik yapabiliriz 
// mixin gibi degil ama kullanilabilir hazir fonksiyonlarda var mixinde sadece parametre var overrigt yok extend daha kopyala yapistir mantigi var
// uygulamayi sass la yazabilmek adina once scss klasoru olusturuyoruz indexe link verirken css verilir 