const headerTemplate = () => {
  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="./index.html">DinoStore</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                Product Categories
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="./products.html">Herbevores</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="./products.html">Carnivores</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="./products.html">Omnivores</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="./products.html">Riding Accessories</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./products.html">Featured</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-danger" href="./products.html">Clearance</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search for products" aria-label="Search">
            <button class="btn btn-primary my-2 my-sm-0" type="submit"><i class="text-white-50 fa fa-search"></i> Search</button>
          </form>
          <a href="./checkout.html" class="btn btn-success ml-lg-3 mb-lg-0 mb-2">
            <i class="text-white-50 fa fa-shopping-cart"></i>
            <span class="qty">5</span> Items
          </a>
        </div>
      </div>
    </nav>
  `
}

const reset = (className) => document.querySelector(className).reset()
const hide = (selector, className) => setTimeout(() => { selector.classList.add(className) }, 2000)
const show = (selector, className) => selector.classList.remove(className)

module.exports = {
  headerTemplate, show, hide, reset
}
