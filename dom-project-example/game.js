const randomNumber = Math.round(Math.random()*100);
console.log(randomNumber); /// burada rastgele bir sayi sececek

document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value);
    console.log(guessInput);

});
/// eger bir sayi girilmediyse uyari vermesini saglayacagim 