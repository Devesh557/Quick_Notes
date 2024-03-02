// const create = document.getElementById('create');
// const notes_ctr = document.querySelector(".text-ctr");


// create.addEventListener('click',function(){
//     let input_box = document.createElement("p");
//     let img = document.createElement("img");
//     input_box.className = "text-inp";
//     input_box.setAttribute("contenteditable","true");
//     img.src = "./images/delete.png";
//     notes_ctr.appendChild(input_box).appendChild(img);

// })
// notes_ctr.addEventListener("click",function(event){
//     if(event.target.tagName ==="IMG"){
//         event.target.parentElement.remove();
//         storage();
//     }
// })



const notesContainer = document.querySelector(".text-ctr");
const create_btn = document.querySelector("#create");
let notes = document.querySelectorAll(".text-inp");


function shownotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
shownotes();

function updatestorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

create_btn.addEventListener("click",function(){
    let input_box = document.createElement("p");
    let dltimg = document.createElement('img');
    input_box.className = "text-inp"
    input_box.setAttribute("contenteditable","true");
    dltimg.src = "./images/delete.png";
    notesContainer.appendChild(input_box).appendChild(dltimg)
})
notesContainer.addEventListener("click",function(event){
    if(event.target.tagName === "IMG"){
        event.target.parentElement.remove();
        updatestorage();
    }
    else if (event.target.tagName === "P"){
        notes = document.querySelectorAll(".text-inp");
        notes.forEach( ev =>{
            ev.onkeyup = function(){
                updatestorage();
            }
        })
    }

})
document.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})
