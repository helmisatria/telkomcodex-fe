import * as mutations from './mutations'
import * as actions from './actions'

const state = {
  products: [],
  filteredProducts: [],
  countPages: 3,
  countAllProducts: 1088,
  countAllProduct: null,
  selectProduct: 'default',
  weightProduct: 0,
  usernameBukalapak: 'helmisatria'
}

const getters = {
  getProducts: state => state.products,
  getCountPages: state => state.countPages,
  getCountAllProducts: state => state.countAllProducts,
  filteredProducts: state => state.filteredProducts,
  countAllProduct: state => state.countAllProduct,
  selectProduct: state => state.selectProduct,
  weightProduct: state => state.weightProduct,
  usernameBukalapak: state => state.usernameBukalapak,
}

export default {
  state,
  getters,
  mutations,
  actions
}