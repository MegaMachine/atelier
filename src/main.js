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
import AppFilterModels from './views/FilterModels.vue';
import AppFilterGoods from './views/FilterGoods.vue';
import AppFilterCloths from './views/FilterCloths.vue';
import ButtonCar from './views/ButtonCar.vue';
import ButtonWishlist from './views/ButtonWishlist.vue';
import VSelect from 'vue-select';
import VueCarousel from 'vue-carousel';
import { Carousel, Slide } from 'vue-carousel';

//Styles
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue'
import './assets/scss/index.scss'

//Components and Use modules
Vue.config.productionTip = false
Vue.component('HeaderBar',HeaderBar);
Vue.component('ButtonBack',ButtonBack);
Vue.component('SectionWrap',SectionWrap);
Vue.component('AppFilterModels', AppFilterModels);
Vue.component('AppFilterGoods', AppFilterGoods);
Vue.component('AppFilterCloths',AppFilterCloths);
Vue.component('VSelect',VSelect);

Vue.component('ButtonCar',ButtonCar);
Vue.component('ButtonWishlist',ButtonWishlist);
Vue.component('Carousel',Carousel);
Vue.component('Slide', Slide);

//Use modules
Vue.use(VueLodash,'lodash');
Vue.use(BootstrapVue);
Vue.use(VueCarousel);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
