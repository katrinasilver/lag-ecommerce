const checkout = require('./partials/checkout')
const products = require('./partials/products')
const homepage = require('./partials/homepage')

/* Homepage Scripts */
if (window.location.href === 'index.html') {
  homepage.validateForm()
}

if (window.location.href.indexOf('checkout') > -1) {
  checkout.initCheckout()
}

$('body').prepend('<header class="border-bottom border-primary"></header>')
document.querySelector('header').innerHTML = homepage.headerTemplate()

$('body').append('<footer></footer>')
document.querySelector('footer').innerHTML = products.footerTemplate()

let allButtons = document.querySelectorAll('.product.btn.btn-primary')
allButtons.forEach(a => {
  a.addEventListener('click', (e) => { e.preventDefault() })
})

$('#carousel').carousel()

let card = document.querySelectorAll('.product.card')
card.forEach(c => {
  c.addEventListener('mouseenter', (e) => {
    let cart = e.target.children[1].children[3] // this is the add to cart button
    homepage.show(cart, 'invisible')
    c.addEventListener('mouseleave', () => { homepage.hide(cart, 'invisible', 0) })
  })
})
