const checkout = require('./partials/checkout')
const products = require('./partials/products')
const homepage = require('./partials/homepage')


document.addEventListener('DOMContentLoaded', () => {

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

  let emailButton = document.querySelector('#signup')
  let email = document.querySelector('#email')
  let notice = document.querySelector('#email-notice')
  let regex = new RegExp(/^[A-Za-z0-9.+]+@[A-Za-z0-9.+]+\.[a-z]{2,}/g)

  if (emailButton) {

    emailButton.addEventListener('click', (e) => {
      e.preventDefault()
      if (email.value && regex.exec(email.value)) {
        notice.textContent = 'Thanks for Signing Up!'
        homepage.reset('.jumbotron > .form-inline')
        homepage.show(notice, 'invisible')
        homepage.hide(notice, 'invisible', 2000)

      } else if (email.value && !regex.exec(email.value)) {
        notice.textContent = 'Please provide a valid email'
        homepage.show(notice, 'invisible')
        homepage.hide(notice, 'invisible', 2000)

      }
    })
  }
})
