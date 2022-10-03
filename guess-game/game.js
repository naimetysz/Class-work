//// Guess my number///
let score = 10;
let topScore = 0;
const randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber)
document.querySelector(".check-btn").addEventListener("click",()=>{
    const msg =document.querySelector(".msg");
    const guessInput = Number(document.querySelector(".guess-input").value);
    console.log(guessInput);
    if(!guessInput){
        document.querySelector(".msg").innerText = "please enter a number";
    } else if(randomNumber===guessInput){
        document.querySelector(".msg").innerText = "congrats you win"
        document.querySelector("body").style.background = "blue"

        if(score > topScore) {
            topScore = score ;
            document.querySelector(".top-score").textContent = topScore
        }
        document.querySelector(".secret-number").textContent = randomNumber
        
        
    } else{
        score -= 1;
        guessInput > randomNumber ? (msg.innerText = "DECREASE") :(msg.innerText = "INCREASE");
    }
})
/// variable tanimlanlmmali


