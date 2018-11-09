const checkout = require('./partials/checkout')
const products = require('./partials/products')
const homepage = require('./partials/homepage')



document.addEventListener('DOMContentLoaded', () => {

  // if (window.location.href.indexOf('checkout') > -1) {
    checkout.initCheckout()
  // }

  $('body').prepend('<header class="border-bottom border-dark"></header>')
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

  let emailButton = document.querySelector('#form-inline')
  let email = document.querySelector('#email')
  let notice = document.querySelector('#email-notice')

  const validator = () => {
    let regex = new RegExp(/^[A-Za-z0-9.+]+@[A-Za-z0-9.+]+\.[a-z]{2,}/g)
    if (email.value && regex.test(email.value)) {
      notice.textContent = 'Thanks for Signing Up!'
      homepage.show(notice, 'invisible')
      homepage.hide(notice, 'invisible', 1000)
      homepage.reset('.jumbotron > .form-inline')
    }
  }

  if (emailButton) {
    emailButton.addEventListener('submit', (e) => {
      e.preventDefault()
      validator()
    })
  }

})
