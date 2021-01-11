import './styles/style.scss';
import 'ant-design-vue/dist/antd.css';

import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'



Vue.config.productionTip = false

Vue.use(Antd);
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
