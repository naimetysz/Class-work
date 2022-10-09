var d = new Date();
 var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
document.getElementById("test").innerHTML = gunler[d.getDay()];
/// java scriptle gun yazdirma
// try ifadesi: Hata oluşturabilecek kod blokları yerleştirilir.

// catch ifadesi: Hata oluştuğunda hatayı yakalamak için kullanılır.

// throw ifadesi: Özel hata oluşturmak için kullanılır.

// finally ifadesi: try catch bloklarından sonra ne olursa olsun kodu çalıştırmak için kullanılır.

// Örneğimizde TC Kimlik numarası Ad ve Soyad bilgisi istenen kullanıcının TC kimlik numarasının 11 haneden az olması, 11 haneden fazla girilmesi veya rakam dışında harf yada farklı bir karakter girilmesi durumunda throw ifadesiyle hata mesajlarının oluşturulmasını sağlayacağız.
// var nesne =document.getElementById("tc");
// var uyari =document.getElementById("uyari");
 
// nesne.onkeypress=function(){
// uyari.textContent="";
// }
 
// nesne.onblur=function(){
 
// try{
// if(isNaN(nesne.value)) throw "Hatalı karakter girdiniz."; 
// if(nesne.value.length<11) throw "11 karakterden az girdiniz.";
// if(nesne.value.length>11) throw "11 karakterden fazla girdiniz.";
// }
// catch(e)
// {
// uyari.textContent=e;
// nesne.focus();
// }
 
// } 