const ModalOpenerKoreya = document.querySelector(".modal--opener")
const modal = document.querySelector(".modal")
const closeBTN = document.querySelector('.modal_close')
const unstar = document.querySelector(".feedback--star")
ModalOpenerKoreya.addEventListener("click", function(){
  modal.classList.add('open')
})

closeBTN.addEventListener("click", function () {
  modal.classList.remove('open')
})
unstar.addEventListener("click", function() {
  this.src = './images/stared.svg'
})