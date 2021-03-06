import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';
import VueProgressBar from 'vue-progressbar'

import { routes } from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueProgressBar, {
  color: '#53b9ec',
  failedColor: '#ffc53e',
  thickness: '2px',
})

Vue.use(VCalendar, {
  firstDayOfWeek: 2,
})

export const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

sync(store, router)

export default new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
