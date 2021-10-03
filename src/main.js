import Vue from 'vue'
import App from './App.vue'
import Store from './store'
import Router from './router';
import axios from 'axios';
import CustomGlobalMixins from './mixins/globalMixins'
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
Vue.config.productionTip = false;
Vue.mixin(CustomGlobalMixins); 
axios.interceptors.response.use(undefined, function(error){
  if(error){
    const _originalRequest  = error.config;
    if(error.response.status===401 && _originalRequest._retry){
      _originalRequest._retry = true;
      Store.dispatch('Logout');
      return Router.push('/login');
    }
  }
})
new Vue({
  store: Store,
  router: Router,
  render: h => h(App),
}).$mount('#app')
