// semantic elementler 
//kahoot
//css giris
// HTML SEMANTIC ELEMENTELER
//semantic elementler ; anlamsal olarak html 5 ile hayatimiza giren div ve span in yerini alan elementler
// html header, nav, main, article footer gibi semantic elementler anlamsal olarak fark eder
//header; icinde bir baslik logo bulundurabilir ceo cular bir tane h1 biulunmasini tavsiye edebilir
//<nav>; sayfalar arasi gecsiis saglayan link vs hakkimizda ,iletisim diye bir sayfa var bunu nav icinde olabilir
//<section> sayfada bolumler olusturmek icin kullanilir 
//<main> ana contenti main icinde kulllanabilirix
//<aside> alakali olmayan seyleri aside ile yapabiliriz mesela dolar kuru hava durumu gibi
//<article> kendi icinde anlamli olan gazete blok yazilari olabilir
//<footer> yine sayfa icinde lokasyan link belirtebilirim en altta iletisim bilgilerinin oldugu ksiim 
// semantic elementlerle voltran yapicaz
// amac semantic elementleri anlamak
// semantik elemntleri dosgrudan cagirsamda class ve id de verebilrim
// nav yerine div yazip class verip css de sekillendirebilirmde
// main icincde ana sayfa gibi dusun ana konu ile ilgil yazilar article 
// css de kutu olarak ddusunmek daha mantikli
 



// CSS DERSI
//INLINE CSS stylena bacround color verip degistiriyorum
// external csss internal css 
//internal css head icine style etiketi acip internalin id si ile istedigim css i veriyordum
//external css disarda bir css olustiurp onu bagliyorduma title etiketi altina bagliyordum link ile hangi dsyayi baglayackasamm
// inline oncelikli idi hic bir yerde bastiramiyiruz
// css stil ozellikleri 

// CSS COLOR 

// 1.COLOR NAME;
//renkleri isimler ile verebiliriz 140 tane renk ismi var 

 // 2. RGB (RED GREEN BLUE)
 // rgb hangisine verirsek onu alir 0 ile 255 arasinda 000 verirsek siyah olur 255 255 255 olursa beyaz elde ederiz
 
 // 3. HEX VALUES
 // her rengin hexa decimal karsiligi kullanilirak yapilmis
 // FF 255 olarak tanimliyorum
 // #00000fff

 // 4.HSL VALUES
 // HSL(HUE SATURATION LIGTNESS)
//360 DERECELIK BIR 0 DA KIRMZI 120 YESIL 240 MAVI BU HUE DENILEN SEY
//SATURATION GRILIK LARAK DUSUNULEBILIR DOYGULUK
//LIGTNESS CANLILIL PARLAKLIK OLARAK DUSUNULEBILIR 
//parlakligi yuzde 50 olursa tam rengi verir yuzde yuz verirssen ligtnessi beyaz olur


// 5.RGBA OPASITIY 
// 0 da tam transparan 1 e dogru o opaklaik tamamanen kayoldun
//1 olunca tamamen opka 0 da tamamne saydam 
  

// 6.HSLA
// 4. parametre opasity veriri ana rengi kullanmak icin l ye yuzde 50 
// ligtness da ana renkten beyaza  ve siyaha dogru yaklasmak anlaminda 

//SELEKTORLER 
//su andan id ve class larla css verebiliyoruz 
// birde selektorlerlede secebiliriz 
//bazi psuodsudo ve grup selektorler var attribute lri selector olarak kullanabiliriz

//a.grup secicler 
//div{} butun divleri secer 
// div bosluk p {} seklinde yazarsam div icindeki paragrafa css uygularim
//p+div dersem pden sonra gelen bir div varsa demek ona css uygula

//b, attribute selectorler 
// mesela paragrafa title diye bir attribute verelim bunu secici olarak soyle kullaniyorum 
// p den sonra []koseli parantez acip attribute buraya yazip {}artik artik css verebilriim
//p[title="baslik 1"]{
    //background-color: rgb(166, 98, 15); bu sekilde attributelarida selector olarak secebilrim 

   // sudo element;secicilerden birini sectikten sonra p::mesela first letter mesela fontsize  
//not;id kullanacagimiz zaman # class kullanacaksak . kullaniyoruz 
 

///CSS 
//BORDERLAR

//box modelde en icerde yazilan icerik content
//disarda bir border cizgisi 
//content ile border arasindaki yere padding
// bordern disina margin diyoruz


// 1.Borderin ozellikleri


// a.border style 
// borderi style olarak tanimlarsak noktali olarak vermek istersem dotted, cizgili olarak vermek istersem dashed, duz cizgili olarak vermek istersem solid cift cizgi double,groove,cercevve gibi ridge icerden bakiyor gibi inside :
//style istersek ayri ayri verebiliriz 
//border:ust,sag,alt,sol olarak bicimlenir
//borderi shorthand olarak da verebilrimm
//{border-style:dotted,ridge,double} busekilde yazdigimda ust sag-sol alt seklinde bicimlenir yani ortadaki ridge sagve solu temsil eder
//ustten baslayip saat yonune dogru gider border style :ridge dashed solid double; ust, sag,alt,sol
// 2li yazarsam ust alt sag sol {solid double} alt ust solid sag-sol double olur 

// b.border width;
// border with: istersem soyle duzenleyebilirm
// mesela border width 7px dersem ust sag alt sol 7px lik bir kalinlik verir 
// mesela border width e 7px 8px 3px 2px dersem saat yonunde ust sag alt ve sola ayri ayri kalinlik vermis olurum
//mesela bordeera width 7px 8px 3px dersem ust sag-sol alt seklinde kalinligini ayarlamis olurum
// mesela border width w 7px 3px dersem alt-ust sag-sol seklinde olur 
// cizgilerin kalinligi ile ilgili birseykac px olacagini belirtiyorum.
// border 3px solid red dedigimde bordera hem kalinlik hem style hemde color vermis oldum

// c. border color 
// bordera rengini istersem tek sekilde de verebilirim
//border color:red dersem borderin ust sag alt ve soluna red vermis olurum
// borderin colorini shorthand seklinde de yapabilirim
// mesela 2li yazarsam red yellow diye alt ust sag sol olur
// mesela 3 lu yazarsam red purple yellow ust sag-sol alt yani ortadaki purple hem sag hem solu temsil eder.

// border-radius kenarlarini yuvarlaklastirir 
//width height bayni oranlari verirsek bir cember elde ederim border radiustan bi cember elde ederim

// aranot favicon 
// link favicon verip dosyadan cekebilrim sekmenin ustunde cikan isaret
// 


// MARGIN LER
// marginler en dista kalan yer borderdan disarda kalan yer her
//marginin de kullanim yerleri var aouto diye bir kullanim yeri var kalan bosluklari kendisi hesaplayip dagistiyor 
//number olarak ve inherit olarak margin verebiliriz 
// herbir element icin default olarak margin verilebilir
// margine de shorthand uygulayabilirm
//mesela margin 20px 50 px dersem alt-ust sag-sol seklinde vermis olurum
//mesela margin tek bir deger verirsem ust sag alt sol seklinde ilerler
// uc tarafli olrak vermek istersem ust sag-sol alt seklinde olur 
// margin aouto yu her zaman genislikle beraber kullanmaliyiz width ile olmak zournd
// marginler ust uste geldiginde ic ice giriyor 
// margin inherit ne demek 
//mesela ustteki containerinda 50 px versdim alltaki de tipki onun gibi davranacaktir 