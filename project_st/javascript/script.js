
// mouse effects
var crsr= document.querySelector("#cursor")
var crsr_blur=document.querySelector("#cursor_blur")
// console.log(crsr_blur)
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"

    crsr_blur.style.left = dets.x - 50 +"px"
    crsr_blur.style.top = dets.y - 50 +"px"
})



// choti screen 
let menu= document.querySelector('.disply_choti_screen');
let chota_trans = document.querySelector('#choti_screen_translate');
// console.log(chota_trans)
menu.addEventListener('click',()=>{
    chota_trans.classList.toggle('choti_screen_show');
})


// trans nav
let trans_nav = document.querySelector("#translate_nav");
let trans_btn = document.querySelector("#trans");
// console.log(trans_btn);

const transNavShow=()=>{
    trans_nav.classList.toggle('show_nav');
}

trans_btn.addEventListener('click',transNavShow);

//opening animation jo avi band h 
let btn = document.querySelector('#welcome');
let openingDiv1 = document.querySelector('#opening_div1');
let openingDiv2 = document.querySelector('#opening_div2');
let openingDiv3 = document.querySelector('#opening_div3');
let openingDiv4 = document.querySelector('#opening_div4');
let body = document.querySelector('body')
// console.log(btn);
// console.log(body);
// console.log(openingDiv1);
// console.log(openingDiv2);

// btn.addEventListener('click',()=>{
//     // openingDiv.style.height="0px";
//     openingDiv1.style.translate ="100vw 100vh";
//     openingDiv2.style.translate ="100vw -100vh";
//     openingDiv3.style.translate ="-100vw 100vh";
//     openingDiv4.style.translate ="-100vw -100vh";
//     // openingDiv.style.scale='0'
//     btn.style.opacity="0"
// })

body.addEventListener('load',()=>{
    console.log("loaded body")
})

// const openingAnimation=()=>{
//     openingDiv1.style.translate ="110vw 110vh";
//     openingDiv2.style.translate ="110vw -110vh";
//     openingDiv3.style.translate ="-110vw 110vh";
//     openingDiv4.style.translate ="-110vw -110vh";
//     // openingDiv.style.scale='0'
// }

// setTimeout(openingAnimation,1000);



// share btn
let share_card = document.querySelector('#page3_card_container')
console.log(share_card);

share_card.addEventListener('click',(event)=>{
    positionClick = event.target;
    // console.log(positionClick);
    if(positionClick.classList.contains('overlay_btn')){
        if(navigator.share){
            navigator.share({
                title:"Petfinder",
                text:"GET PETS FOR ADOPTION HERE ON PETFINDER",
                url:"http://127.0.0.1:5500/project_st/pages/home.html",
            }).then(()=>{
                console.log("thanks for sharing");
            }).catch((err)=>{
                console.log("error:");
                console.log(err);
            })
        }else{
            alert("browser does not support this api");
        }
    }
})



// gsap animation
gsap.to("#nav",{
    backgroundColor:"#030307",
    height:"110px",
    duration:1.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        marker:true,
        start:"top -10%",
        end:"top -5%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor: "#030307",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -40%",
        end:"top -70%",
        scrub:1.8,
    }
})

gsap.from("#page4 h2",{
    y:80,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})

