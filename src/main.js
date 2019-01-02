import Vue from 'vue'
import App from './App.vue'
import Blacklight from 'blacklight-vue'
import BlacklightRoutes from 'blacklight-vue/src/routes'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

Vue.config.productionTip = false

Vue.use(Blacklight)
Vue.use(VueRouter)

// Push your own "Home" page into the routes.
BlacklightRoutes.push({ path: '/', name: 'home', component: Home })
const router = new VueRouter({
  routes: BlacklightRoutes
})

Vue.http.options.root = 'http://demo.projectblacklight.org'
Vue.http.options.headers = {
  Accept: 'application/json'
}

Vue.prototype.$titleField = 'title_display'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
