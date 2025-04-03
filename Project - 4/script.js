const ele = document.querySelectorAll(".section");
const imageContainer = document.querySelector("img");


ele.forEach(function(element){
    console.log(element.childNodes)
    element.addEventListener("mouseenter",function(){
        console.log(element.childNodes)
        element.childNodes[3].style.opacity = 1;
    })
    element.addEventListener("mouseleave",function(){
        console.log(element.childNodes)
        element.childNodes[3].style.opacity = 0;
    })

    element.addEventListener("mousemove",(dets)=>{
        element.childNodes[3].top = dets.y + "px";
        element.childNodes[3].left = dets.x + "px";
        console.log(element.childNodes[3].left);
        
    })
})