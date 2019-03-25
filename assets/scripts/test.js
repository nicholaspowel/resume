import { Avail } from './avail'

class Cart {
  constructor () {
    if (!Cart.singleCart) {
      this._data = {
        // store products
        // array of objects which are item which
        // contain product name (product)
        // and contain its count (quantity)
        products: []
      }
      Cart.singleCart = this
    }
    return Cart.singleCart
  }

  addToCart (product, quantity) {
    // TODO
    const cart = this._data.products
    const name = product.name

    // if product is not in stock, console log item out of stock and exit
    const isOutOfStock = product => console.log(`${name} is out of stock`)

    const isInStock = product => {
      // map array of objects to its product value
      // if mapped array already includes product
      // increase its current quantity by the quantity
      // and exit function
      if (cart.map(item => item.product.name).includes(name)) {
        cart[name].quantity += quantity
      }
      // push the object with key|value to the array of products
      // this will create the object of the product with its quantity
      else {
        cart.push({name, quantity})
      }
      // console log cart
      console.log(cart)
    }

    Avail.inStock(product)
      .then(isInStock)
      .catch(isOutOfStock)
  }
}

const singleCart = new Cart()

export default singleCart
