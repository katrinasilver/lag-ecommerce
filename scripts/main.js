const checkout = require('./partials/checkout')
const homepage = require('./partials/homepage')
const products = require('./partials/products')

let addCartButton = document.querySelectorAll('.btn.btn-primary')
addCartButton.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault() //hijack all btn-primaries behavior from scrolling to top when clicked!
  })
})
