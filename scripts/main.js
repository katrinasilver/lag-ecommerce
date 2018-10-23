const checkout = require('./partials/checkout')
const homepage = require('./partials/homepage')
const products = require('./partials/products')

/* Homepage Scripts */

$('#carousel').carousel() // initialize the homepage carousel

let addCartButton = document.querySelectorAll('.product.btn.btn-primary')
addCartButton.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault() //hijack all btn-primaries behavior from scrolling to top when clicked!
  })
})

let emailButton = document.querySelector('#signup')
let email = document.querySelector('#email')
let success = document.querySelector('#email-success')
let regex = new RegExp(/^[A-Za-z0-9.+]+@[A-Za-z0-9.+]+\.[a-z]{2,}/g);

const validate = () => {
  !regex.exec(value) ? success.classList.remove('d-none') : false
}

const signup = (e) => {
  email.value && regex.exec(email.value) ?
  (success.classList.remove('d-none'), success.textContent = 'Thanks For Signing Up!', e.preventDefault()) : false
}

email.addEventListener('focus', validate)
emailButton.addEventListener('click', signup)


//   function validate() {

//     if (!regex.exec(email)) { $(this).addClass('warning') }
//     else { $(this).removeClass('warning') };
//   };

//   function signup() {
//     if (!$input.val()) { $input.addClass('warning') }
//     if ($input.hasClass('warning')) { shake($input) }
//     else {
//       $input.val('');
//       $(".success").fadeIn(300);
//       setTimeout(function () {
//         $(".success").fadeOut(300);
//       }, 1500);
//     };
//   };


$('body').prepend('<header></header>') // add the header element at the top of the body
document.querySelector('header').innerHTML = homepage.headerTemplate() // append the header template inside the header tag
