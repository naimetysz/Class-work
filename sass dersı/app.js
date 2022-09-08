/// sass nedir sass ve scss bir css extensinidir yani css uzantisidir yani css on islemcisi olarak gecer artik olgunlasmis oturmus tecrubeli bir kulllanimdir
// css in icinde degildir css den ayri bir dildir css hiyerarsik  bir yapi tam olarak bur dil degildir sass ve scss ise css in bazi problemelerini gidermek icin kullanilan bir uzanti eklenti
// sass i gelistirmek icin iki farkli dil kullanilmis dart ve ruby dili kullanilmis yeni bir derleyici olusturulmus b=ve sass da yazilan kodlari alip duz css e ceviriryor
// browser scss i anlamaz biz bunu cevirmeliyiz browser html css java script anlar  o yuzden sassla yazilan her uygulama cevrilmelidir
// nodejs ve onun uzerinde calisan sass sass kurulumu her turlu bilgisayda sass -- version la kontrol edilebilir scss ve sass on islemci
// amaci css in eksikliklerini gidermek programsal ozelliklerini gelistirmek sass 16 yildan beri var burada programsal olarak fonsiyon yazilabilir
// css de cok fazla tekrar oluyor bunu gidermek icin sass ve scss gelistirilmis 
//sass ve scss arasindaki fark sass ruby ile yazildi scss dart ile yazilmis hali
// sass da ruby ile yazilmis ve orada noktali virgul suslu yok dart ile bir daha yaziliyir adi scss oluyor insanlar bunu boyle yaziyorlar
//sass dan baska less diye bir preprosor de var scss daha eski oldugundan biliniyor neden sass diye bir preprosor kullaniliyor 
// modul fonksiyon vs icin insanlar scss i tercih ediyor kodu daha analasilabilir yonetilebilir hale getiriyor buyuk firmalarlarda kullaniliyor
// bosstrap bir kutuphane hazir classlari var o kullaniliyor isimizi sass da herseyi biz yapiyoruz css kullanmak yerine daha hiyerasrik bir api saglar sass 
//buyuk firmalaea hazir kutuphane kullanmak yerine kendi styli ni kullaniyor bu gibi ortamada sass kullanmak daha mantikli bosstrapte al kulla matigu var
// bostrapin claslarini ezmemiz gerekiyor 
//// SASS IN OZELIKLERI
// variable kullanabilme 2.nesting ic ice kod yazabilme ben  notasyonuna uygun bir kullanim (dede baba torun ) nestimg olayi onemli klasik den ziyade child grand ilsikis
//3.parcalara ayirma modullere ayirma modul; butun kodlari tek bir dosyaya koymak gerekmez her biri ayri ayri dosya haline gelebilir ve bunlar birlersir
// css parcalandginda karismalar olabiliyor iste bunu sass ve csss daha guzellestirdi onune _ koymak zorunda eger bu bir modulse yani parcalanmis kod sa bunun anlasilmasi icin _bu zorunlu
// daha sonra ayirdigimiz kodlari @forward @use ile birlestiriyoruz @use ile kullanirsak mesela headerde kullanilarn degiskeni nav da da kullanabiliyoruz 
// yani bir ad uzayi olusturuyor @import rule u kaldirilmiaya calsisyor
// 4.mixins;aslinda fonksiyon demek @ ile mixin yaziyoruz bu mesela bir parametre aliyor ve bunu kullaniyirzu cagirmak icin @include u kullaniyoruz 
//5.extend/intehrihance; mixinde parametre verip style olusturuyorz burada style olusturup baska yerde kullanmak istiyoruz 
// istersek extend ettigimiz styla degisiklik yapabiliyoruz 
// 6.operator;hazir fonksyonlar da var dongu if else yapilari vs var 
//  

