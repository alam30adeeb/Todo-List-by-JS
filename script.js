const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

// console.log(inputBox)
// console.log(listContainer)

function addTask(){
    if(inputBox.value===""){
        alert("you must type something");
    }else{
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const cross = document.createElement('span')
        cross.innerHTML = "\u00d7";
        li.appendChild(cross)
        saveTask()
    }
    inputBox.value = ""
}

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveTask()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveTask()
    }
})

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()