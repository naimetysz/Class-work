const h1 = document.querySelector("#header h1");
console.log(h1);

h1.onmouseover = function (){
    h1.style.color ="red";
};
h1.onmouseout = () => {
    h1.style.color = "blue"
} // array formatinda yazimi
h1.addEventListener("click",()=>{
    alert("mutlu ol:)")
})
document.getElementById("btn").addEventListener("click",function(){
    const input =document.querySelector("#input")
    if (input.value ===null){
        alert ("degeri bos bebegim");
    }else{
        alert(`${input.value} girdin `)
    }
})
///// macbook gibi buyume ornegi
const list =document.querySelectorAll(".list")
list.forEach((li)=>{
    li.style.transition = "font-size 0.5s";
    li.style.transform = "translateX(-10px)";
    li.style.lineHeigth = "2rem"
    console.log(li);
    li.onmouseover =()=>{
        li.style.fontSize = "4rem";

    };
    li.onmouseout = ()=> {
        li.style.fontSize = "1rem";
    };
})
window.onload = function (){
    document.querySelector("#input").focus();

};
