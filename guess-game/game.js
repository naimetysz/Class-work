//// Guess my number///
const randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber)
document.querySelector(".check-btn").addEventListener("click",()=>{
    const guessInput = Number(document.querySelector(".guess-input").value);
    console.log(guessInput);
    if(!guessInput){
        document.querySelector(".msg").innerText = "please enter a number";
    }
})