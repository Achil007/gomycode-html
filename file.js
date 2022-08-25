var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
const cart = document.querySelectorAll('.cart')
cart.addEventListener('click',function(){
    innerWidth = innerWidth + "100px"
    innerHeight = innerHeight + "100px"
})
