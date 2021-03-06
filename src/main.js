import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueResource from 'vue-resource';
import VueFire from 'vuefire'
import store from './store'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueFire)
Vue.config.productionTip = false

Vue.http.options.root = 'https://my-books-b8b9f.firebaseio.com/';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
