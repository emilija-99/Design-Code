const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", e=>{
    parent.style.background = "white";
    child.style.background = "red";
});

parent.addEventListener("click", e=>{
    parent.innerText = "New text";
});




