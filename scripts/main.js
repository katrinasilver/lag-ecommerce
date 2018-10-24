const checkout = require('./partials/checkout')
const homepage = require('./partials/homepage')
const products = require('./partials/products')

/* Homepage Scripts */
$('body').prepend('<header></header>') // add the header element at the top of the body
document.querySelector('header').innerHTML = homepage.headerTemplate() // append the header template inside the header tag

$('#carousel').carousel() // initialize the homepage carousel

let addCartButton = document.querySelectorAll('.product.btn.btn-primary')
addCartButton.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault() //hijack all btn-primaries behavior from scrolling to top when clicked!
  })
})

// Sign-up Validation
let emailButton = document.querySelector('#signup')
let email = document.querySelector('#email')
let notice = document.querySelector('#email-notice')
let regex = new RegExp(/^[A-Za-z0-9.+]+@[A-Za-z0-9.+]+\.[a-z]{2,}/g)

emailButton.addEventListener('click', (e) => {
  e.preventDefault()
  email.value && regex.exec(email.value) ?
    ( notice.textContent = 'Thanks for Signing Up!',
    homepage.show(notice, 'invisible'),
    homepage.reset('.jumbotron .form-inline'),
    homepage.hide(notice, 'invisible') )
  : !regex.exec(email.value) ?
    ( notice.textContent = 'Please provide a valid email',
    homepage.show(notice, 'invisible'),
    homepage.reset('.jumbotron .form-inline'),
    homepage.hide(notice, 'invisible') )
  : false
})
