const cursor = document.querySelector(".ri-cursor-line");



document.addEventListener("mousemove",(event)=>{
    cursor.classList.remove("hidden");
    cursor.style.left = event.clientX - 2 + "px";
    cursor.style.top = event.clientY-1 + "px";
})


document.addEventListener("mouseenter", () => {
    cursor.classList.remove("hidden");
});


document.addEventListener("mouseleave", () => {
    cursor.classList.add("hidden");
});