const checkout = require('./partials/checkout')
const homepage = require('./partials/homepage')
const products = require('./partials/products')

// if (window.location === 'checkout') {
//   initCheckout()
// }

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
    let cart = e.target.children[1].children[3] // this is the add to cart button
    homepage.show(cart, 'invisible')
    c.addEventListener('mouseleave', () => { homepage.hide(cart, 'invisible', 0) })
  })
})

// Email Sign-up Validation
let emailButton = document.querySelector('#signup')
console.log(emailButton)
let email = document.querySelector('#email')
let notice = document.querySelector('#email-notice')
let regex = new RegExp(/^[A-Za-z0-9.+]+@[A-Za-z0-9.+]+\.[a-z]{2,}/g)

emailButton.addEventListener('click', (e) => {
  e.preventDefault()
  email.value && regex.exec(email.value) ?
    ( notice.textContent = 'Thanks for Signing Up!', homepage.show(notice, 'invisible'), homepage.reset('.jumbotron > .form-inline'),
    homepage.hide(notice, 'invisible', 2000) )
  : !regex.exec(email.value) ?
    ( notice.textContent = 'Please provide a valid email', homepage.show(notice, 'invisible'), homepage.hide(notice, 'invisible', 2000) )
  : false
})


var shippingFirstName = document.querySelector('#shipping-firstname')
var shippingLastName = document.querySelector('#shipping-lastname')
var shippingCompany = document.querySelector('#shipping-companyName')
var shippingAddress = document.querySelector('#shipping-address')
var shippingAppart = document.querySelector('#shipping-appar')
var shippingTown = document.querySelector('#shipping-town')
var shippingState = document.querySelector('#shipping-state')
var shippingZipcode = document.querySelector('#shipping-zipcode')

var billingFirstName = document.querySelector('#billing-firstname')
var billingLastName = document.querySelector('#billing-lastname')
var billingCompanyName = document.querySelector('#billing-companyName')
var billingAdress = document.querySelector('#billing-address')
var billingAppart = document.querySelector('#billing-appar')
var billingTown = document.querySelector('#billing-town')
var billingState = document.querySelector('#billing-state')
var billingzipcode = document.querySelector('#billing-zipcode')

var allBidds = [billingFirstName, billingLastName, billingCompanyName, billingAdress, billingAppart, billingTown, billingState, billingzipcode]

var checkBox = document.querySelector('#checkbox-validation');
console.log(checkBox);

checkBox.addEventListener('change', function (e) {
  if (checkBox.checked) {
    checker = true;
    billingFirstName.value = shippingFirstName.value;
    billingLastName.value = shippingLastName.value;
    billingCompanyName.value = shippingCompany.value;
    billingAdress.value = shippingAddress.value;
    billingAppart.value = shippingAppart.value;
    billingTown.value = shippingTown.value;
    billingState.value = shippingState.value;
    billingzipcode.value = shippingZipcode.value;
  } else {
    allBidds.forEach(element => {
      element.value = '';
      checker = true;
    });
  }
})

document.querySelector(".checkout-box").addEventListener('submit', function (e) {
  alert("Thank you for ordering our Dinos!")
})
