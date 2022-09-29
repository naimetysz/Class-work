const h1 = document.querySelector("#header h1");
console.log(h1);

h1.onmouseover = function (){
    h1.style.color ="red";
};
h1.onmouseout = () => {
    h1.style.color = "blue"
} // array formatinda yazimi
