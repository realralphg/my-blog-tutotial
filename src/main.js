import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

//Create new instance for the VueRouter
const router = new VueRouter({
  routes:Routes, 
  mode:'history'
});


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')


Vue.config.productionTip = false



//Learning Vue Custom Directives --- bind(el, binding, vnode){}
Vue.directive('rainbow', {
  bind(el){
    el.style.color = '#' + Math.random().toString().slice(2,8);
  }
});

//Learning Vue Filters --- Create the shortened "...read more" |snippet
Vue.filter('snippet', function(value){
  return value.slice(0,100) + "  ...Read more"
});

