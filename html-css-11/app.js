///// HTML CSS FLEX ////
//bir dizilis yontemi float position nasil bir dizilis yontemi ise bu da flex de bir dizilis yontemidir 
// flex kullanisli bir yontemdir 
// positionda goreceli konum vermek adina ara ara kullanilabilir ama cogu islemi flexle yapmak mumkun 
//flex nasil calisri;bir tasiyici var article div vs gibi bu tasiyiciya display;flex ozelligi verine akis degisir noralde divler alt alta dizilir ama boyle yapinca yan yana dizilir
// bunlar da float gibi akisi bozar.bunu biz ayarlayabiliriz nasil dizilmasini istiyorsak oyle yapabiliriz
//conteynir icinde baska baska elementler de olabilir conteynir ve icinde hizalanmayi bekleyen elementeler biz conteynira flexbix dedikten sonra iceriye ayar verilebilir
//ozellikle responsive denilen goreceli tasarimlarda yaygin olarak kullanilir 
// harici kutuphanelerde kullanilabilir ama mantigi bu dur responsive de flex boxa dayanir 
/// 1.flex-direction; display;flex verdigimizde bir conteynira flex-direction : propety si ile akisa yon verebiliriz
// default degeri row dur yani yanyana dizilmektir alt alta olsa bile ama column yaparsak alt alata dizilir
//reverse yaparsak bastaki sona sondaki basa gelebilir 3 ozellikgi var flex direction :row|column|row-reverse|column-reverse
// bu ozellik display;flex flex-direction: column; conteynira verilir itema verilmez
// 2. flex -wrap; flex-wrap: wrap olursa itemlar tasiyicinin with e sigmazsa sigmayanlari alta atar ama default degeri no wrap sa tekbir satira sigdirir
// diyelim butonlar koyduk bunlar ekran kuculdugunda asagiya dizilmesini isteyebilriiz ama biz bununla basit capli responsive yapabilirzi'
// -wrap ozelligi ile 
// eger bu ozelliggi wrap yaparsak asagi iner ama tek satira sigmasini istersek no-wrap deriz
// mesela biz soyle yapabiliriz ekran boyutuna ekrana soyle yazdir boyle yazdir diye bilriizi media -querylerle 
// 3.flexbox:justfy-content hizalama yatayda hizalamak burada hizalamayi  birden fazla element icin yapabilirzi display;flex justif-content ; flex-start/flex-end/center/space-between/space-around

// ile sola/saga/ortaya/sagdan soldan marginli/space-evenly(butun alanlari esit boler),space-around(sagdan soldan belli bosluk verir betwene gore biraz fazla)
// 4. felxbox;align-items; flexbox icindeki elemenlari dikeyde hizalamak icin kullanilir

// align-items;konteynirin belli yuksekligi var bu buyukkluk icinde flex-start ile yukari dogru/flex-end ile asagi dogru/center ortaya dogru/stech yukaridan asagiya dogru siralaar
// siralar.ancak sterc kullanmak icin elemnetin sabit yukseligi olmamali icerdeki itemin sabit yukseligi olmaz /baseline elemneton yazilarina gore hizalar
// flexbox;align -content cok satirli elemanlari siralamak icin kullanilir align-content hepsini tek bir paket gibi dusunup hepsini hizalar
// align -content tek row da olsa cok rowda olsa tek gibi yapar 
/// normalde itemlerin arasini marginle actik tariycilar farkli oldugundan webkit kullanilabilir browserlar arasi uyumuluk
// 5.flexbox gap marginle arasini actik argin demek elemnetin disi ile ilgili bosluk demek gap de kucuk bir nuans var item arasi sutun ve satirlarin 
// boslugunu belirliyor dis hacim vermek istemiyorsak gap verebiliriz ama bunu tasiyiciya vericez
// yatay ve dikey bosluklari belirlemek icin  kullanilir ilk yazilan yatay satirlar 2.ise dikey sutunlar arasindaki bosluktur
// ara not .container>div{$}*9 degisken olusturp yaptim


// flexbox(flex-grow)elementlerin buyume oranini belirler itemlara goreceli deger verdigimizde buyuyp kuculdgunde ayni deger kalmasini isteyebiliriz biri digerlerinden daha fazla yada daha az buyusun isteyebiliriz
// flex-grow ozellihini digerlerine gore buyultebiliriz
//flexbox(flex-shrink)digerlerine gore kuculsun istiyorsak kullaniyoruz 
//flex-basis satirdaki maximum orani nasil paylastiracgimiz gosterir
// auotu olarak kalirsa var olani verir 0 yaparsak herbir elemanin buyuklugu icerigi kadar olur grow ozelligi icin flex kullanilmali aksi durumda conten 




///// FLEX-GRID//
// hem responsive olsun bu sistemde ne yapiyor ekran boyutu