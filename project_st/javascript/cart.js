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


// trans nav
let trans_nav = document.querySelector("#translate_nav");
let trans_btn = document.querySelector("#trans");
// console.log(trans_btn);

const transNavShow=()=>{
    trans_nav.classList.toggle('show_nav');
}

trans_btn.addEventListener('click',transNavShow);


// cart

let icon = document.querySelector('.icon');
// console.log(icon)
icon.addEventListener('click',()=>{
    window.location.href="../pages/shop.html"
})

let shopCart = document.querySelector('#shop');
let basket = JSON.parse(localStorage.getItem('data')) || []

let generateShop=()=>{
    shopCart.innerHTML= AnimalData.map((x)=>{
        let {id,type,name,breed,age,gender,image} = x

        return `
          <div class='cart_item' id='animal-id-${id}'>
           <img src='${image}'></img>
           <div class='animal_info'>
           <h5>${name}</h5>
           <p>${type}</p>
           <p>${breed}</p>
           <p>${age}</p>
           <p>${gender}</p>
           </div>
           <button id='btn' onclick="add_to_cart('${id}','${type}','${name}','${breed}','${age}','${gender}','${image}')">ADD TO MEET</button>
          </div>

        `
    })
}

let add_to_cart=(id,type,name,breed,age,gender,image)=>{
  basket.push({
    id:id,
    type:type,
    name:name,
    breed:breed,
    age:age,
    gender:gender,
    image:image
    })
    localStorage.setItem('data',JSON.stringify(basket ))
    calculate();
}

let calculate = ()=>{
  let cart_icon = document.querySelector('#cart_amount')
  let cart_amount= basket.length

  cart_icon.innerHTML= cart_amount
}

calculate();

generateShop();