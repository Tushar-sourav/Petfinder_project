let sign_in_btn = document.querySelector('#sign-in-btn');
let sign_up_btn = document.querySelector('#sign-up-btn');
let container = document.querySelector('.container');

sign_up_btn.addEventListener("click",()=>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click",()=>{
    container.classList.remove("sign-up-mode");
});


var crsr= document.querySelector("#cursor")
var crsr_blur=document.querySelector("#cursor_blur")
// console.log(crsr_blur)
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"

    crsr_blur.style.left = dets.x - 50 +"px"
    crsr_blur.style.top = dets.y - 50 +"px"
})