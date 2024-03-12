var crsr= document.querySelector("#cursor")
var crsr_blur=document.querySelector("#cursor_blur")
// console.log(crsr_blur)
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"

    crsr_blur.style.left = dets.x - 50 +"px"
    crsr_blur.style.top = dets.y - 50 +"px"
})

let trans_nav = document.querySelector("#translate_nav");
let trans_btn = document.querySelector("#trans");
// console.log(trans_btn);

const transNavShow=()=>{
    trans_nav.classList.toggle('show_nav');
}

trans_btn.addEventListener('click',transNavShow);