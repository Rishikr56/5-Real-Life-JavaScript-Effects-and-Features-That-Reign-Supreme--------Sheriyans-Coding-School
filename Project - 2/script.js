const like = document.querySelector(".like");
const card = document.querySelector(".card");


document.querySelector(".card").addEventListener("click",()=>{
    like.classList.remove("hidden");
    setTimeout(function(){
        like.style.transform = 'translate(-50%, -50%) scale(4)';
        like.style.transition = 'transform 0.3s ease';
    },30)
    setTimeout(function(){
        like.classList.add("hidden");
        like.style.transform = 'translate(-50%, -50%) scale(0)';
    },400)
})


