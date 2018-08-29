// Libs
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueLodash from 'vue-lodash'


//Components
import HeaderBar from './views/HeaderBar.vue';
import ButtonBack from './views/ButtonBack.vue';
import SectionWrap from './views/SectionWrap.vue';
import AppFilter from './views/Filter.vue';
import ClothFilter from './views/ClothFilter.vue';
import ButtonCar from './views/ButtonCar.vue';
import ButtonWishlist from './views/ButtonWishlist.vue';
import VSelect from 'vue-select';

//Styles
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue'
import './assets/scss/index.scss'

//Components and Use modules
Vue.config.productionTip = false
Vue.component('HeaderBar',HeaderBar);
Vue.component('ButtonBack',ButtonBack);
Vue.component('SectionWrap',SectionWrap);
Vue.component('AppFilter', AppFilter);
Vue.component('VSelect',VSelect);
Vue.component('ClothFilter',ClothFilter);
Vue.component('ButtonCar',ButtonCar);
Vue.component('ButtonWishlist',ButtonWishlist);
Vue.use(VueLodash,'lodash');
Vue.use(BootstrapVue);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
