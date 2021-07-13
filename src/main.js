import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueApollo from 'vue-apollo';
import { createProvider } from './vue-apollo';
import './assets/scss/main.scss';

Vue.use(VueApollo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
