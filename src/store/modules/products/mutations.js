// called when fetching products from API
export const setProducts = (state, fetchProducts) => {  
  const products = fetchProducts.map(product => {
    return {
      ...product,
      count: 1,
      checked: true
    }
  })

  state.products = products
}

// called when value on jumlah on each card of product changed
export const setProductCount = (state, product) => {
  const findProduct = state.products.findIndex((prod => prod.id == product.id));

  const foundProduct = state.products[findProduct]
  
  state.products.splice(findProduct, 1, {
    ...foundProduct,
    count: product.count,
    checked: product.count ? (product.count > 0) : true
  })
}

export const setWeightProduct = (state, weight) => {
  state.weightProduct = weight
}


// called when input change all's value changed
export const setAllCount = (state, count) => {
  state.products = state.products.map((product) => {
    if (product.checked) {
      return {
        ...product,
        count,
      }
    }
    return product
  })
}

// called when selection input's value changed
export const toggleCheckAllProducts = (state, checked) => {
  state.products = state.products.map((product) => {
    return {
      ...product,
      checked
    }
  })
}

export const resetCountAllProduct = (state) => {
  state.countAllProduct = null
}

export const setCountAllProduct = (state, count) => {
  state.countAllProduct = count
}

export const setSelectProduct = (state, selected) => {
  state.selectProduct = selected
}

// toggle check one card of product
export const toggleProductChecked = (state, product) => {
  const findProduct = state.products.findIndex((prod => prod.id == product.id));

  const foundProduct = state.products[findProduct]

  state.products.splice(findProduct, 1, {
    ...foundProduct,
    checked: !foundProduct.checked,
    count: foundProduct.count == 0 ? 1 : foundProduct.count
  })
}

export const setUsernameBukalapak = (state, username) => {
  state.usernameBukalapak = username
}
