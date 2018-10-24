const checkout = require('./partials/checkout')
const homepage = require('./partials/homepage')
const products = require('./partials/products')

/* Homepage Scripts */
$('body').prepend('<header></header>') // add the header element at the top of the body
document.querySelector('header').innerHTML = homepage.headerTemplate() // append the header template inside the header tag

$('#carousel').carousel() // initialize the homepage carousel

// hijack all btn-primaries behavior from scrolling to top when clicked!
let addCartButton = document.querySelectorAll('.product.btn.btn-primary')
addCartButton.forEach(a => {
  a.addEventListener('click', (e) => { e.preventDefault() })
})

// add the hover button effect on the products per project requirements
let card = document.querySelectorAll('.product.card')
card.forEach(c => {
  c.addEventListener('mouseenter', (e) => {
    let cart = e.target.children[1].children[2] // this is the add to cart button
    homepage.show(cart, 'invisible')
    c.addEventListener('mouseleave', () => { homepage.hide(cart, 'invisible', 0) })
  })
})

// Email Sign-up Validation
let emailButton = document.querySelector('#signup')
let email = document.querySelector('#email')
let notice = document.querySelector('#email-notice')
let regex = new RegExp(/^[A-Za-z0-9.+]+@[A-Za-z0-9.+]+\.[a-z]{2,}/g)

emailButton.addEventListener('click', (e) => {
  e.preventDefault()
  email.value && regex.exec(email.value) ?
    ( notice.textContent = 'Thanks for Signing Up!', homepage.show(notice, 'invisible'), homepage.reset('.jumbotron > .form-inline'),
    homepage.hide(notice, 'invisible', 2000) )
  : !regex.exec(email.value) ?
    ( notice.textContent = 'Please provide a valid email', homepage.show(notice, 'invisible'), homepage.reset('.jumbotron > .form-inline'), homepage.hide(notice, 'invisible', 2000) )
  : false
})
