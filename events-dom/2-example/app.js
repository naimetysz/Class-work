const langInput = document.querySelector(".lang-input");
console.log(langInput)
const addBtn = document.querySelector("#add-btn");
const deleteBtn =document.querySelector("#delete-btn");
const langList = document.getElementById("lang-list");
console.log(langList);
const newUl = document.createElement("ul");

langList.appendChild(newUl);
addBtn.addEventListener("click",()=>{
    if (!langInput.value){
        alert("please enter a languaege");

    } else {
        newUl.innerHTML += `<li>${langInput.value}</li>`;
        langInput.value ="";
    
    }
});
///focus
window.addEventListener("load",()=>{
    langInput.focus();
})
deleteBtn.addEventListener("click",()=>{

    newUl.childElementCount > 0 ?newUl.removeChild(newUl.lastElementChild) :
    alert ("there is no item to delete");
});
// dell key event handler
langInput.addEventListener('keydown',(event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.code);
    if(event.keyCode===13){
        addBtn.
        click();
        if(event.keyCode === 46){
            deleteBtn.click();
        }
    }

    

});
