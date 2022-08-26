const showCartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");

const addButtons = document.querySelectorAll(".addBtn")
const price = document.querySelectorAll(".soum")
const count = document.querySelector(".count")
const quantity = document.querySelectorAll(".counter")
let cartIsVisible = false;

function toggleCart() {
    if (cartIsVisible == false) {
      cart.setAttribute("class", "cart visible");
      cartIsVisible = true;
    } else {
      cart.setAttribute("class", "cart");
      cartIsVisible = false;
    }
  }
function showCart() {
    if (cartIsVisible == false) {
      cart.setAttribute("class", "cart visible");
      cartIsVisible = true;
    } 
  }

showCartBtn.addEventListener("click", toggleCart);

for (let i = 0 ; i < addButtons.length ; i++) {
    addButtons[i].addEventListener('click', function() {
        showCart()
        let item = document.getElementById(`item-${i + 1}`)
        item.setAttribute("class", `visible`)
    })
}
for (let i = 0 ; i < addButtons.length ; i++) {
  addButtons[i].addEventListener('click', function(){
    count.innerHTML = parseInt(count.innerHTML) + parseInt (price[i].innerHTML)
  })


}
for (let i = 0 ; i < addButtons.length ; i++){
  addButtons[i].addEventListener('click', function() {
    quantity[i].innerHTML++
  })

}
