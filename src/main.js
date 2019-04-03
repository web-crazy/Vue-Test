// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCog,
  faQuestionCircle,
  faBuilding,
  faPencilAlt,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';
import router from './router';
import store from './store';

library.add(faCog);
library.add(faQuestionCircle);
library.add(faBuilding);
library.add(faPencilAlt);
library.add(faExclamationCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
