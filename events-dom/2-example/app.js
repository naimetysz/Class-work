const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn =document.querySelector("#delete-btn");
const langList = document.getElementById("#lang-list");
const newUl = document.createElement("ul")
langList.appendChild(newUL);

addBtn.addEventListener("click" ()=>{
    if(!langInput.value){
        alert("please enter a language");

    }else{
        newUl.innerHTML += `<li>${langInput.value}</li>`
        
    }
})
