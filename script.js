let scrollContainer = document.querySelector(".gallery")
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

leftBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -=1000;
});
rightBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft +=1000;
});

console.log("Hello");

