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





// animal cart
let label = document.querySelector('#label')
let animal_cart = document.querySelector('#animal_cart')

let basket  = JSON.parse(localStorage.getItem('data')) || []

let calculate= ()=>{
    let cart_icon = document.querySelector('#cart_amount')
    cart_icon.innerHTML = basket.length
}

// remove from cart

let remove_from_cart =(id)=>{
    basket = basket.filter((x)=>x.id!=id)
    localStorage.setItem('data',JSON.stringify(basket))
    calculate()
    generate_cart_item()
}


let generate_cart_item =()=>{
    if(basket.length!=0){
        return (animal_cart.innerHTML= basket.map((x)=>{
            // console.log(x);
            let {id,type,name,breed,age,gender,image}= x;
            return  `
                 <div class="shop_item">
                  <p>${name}</p>
                  <div class="shop_item_img">
                    <img src="${image}" alt=""/>
                  </div>

                  <button onclick="remove_from_cart('${id}')">Remove</button>
                  

                 </div>
            `
        })
            
            
            )
    }
}

generate_cart_item()

calculate();


// fix meet
let fix = document.querySelector('#fix')

fix.addEventListener('click',()=>{
    alert("meeting is fixed");
})