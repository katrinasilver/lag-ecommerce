const initCheckout = () => {

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

    let checkPurchase = document.querySelector(".checkout-box");

    if(checkPurchase) {
      checkPurchase.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thank you for ordering our Dinos!")
      })
    }
}

module.exports = {
  initCheckout
}
