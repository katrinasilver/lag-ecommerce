const checkout = require('./partials/checkout')
const homepage = require('./partials/homepage')
const products = require('./partials/products')

/* Homepage Scripts */

$('#carousel').carousel() // initialize the homepage carousel

let addCartButton = document.querySelectorAll('.btn.btn-primary')
addCartButton.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault() //hijack all btn-primaries behavior from scrolling to top when clicked!

    if (a.classList.contains('signup') && document.querySelector('#email').value !== '') {
      document.querySelector('.alert.alert-success').classList.remove('d-none') // add setInterval later
    }
  })
})

$('body').prepend('<header></header>') // add the header element at the top of the body
document.querySelector('header').innerHTML = homepage.headerTemplate() // append the header template inside the header tag
