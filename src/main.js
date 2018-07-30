import Vue          from 'vue';
import VueResource  from 'vue-resource';
import VueRouter    from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import VueSession   from 'vue-session';

import App    from './App.vue';
import Routes from './Routes'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueSession);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
