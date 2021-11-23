import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(IconsPlugin)

function nextFactory(context, middleware, index) {
  const subSequenceMiddleware = middleware[index];
  if(!subSequenceMiddleware) {
    return context.next;
  }

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subSequenceMiddleware({...context, nextMiddleware});
  }
}

router.beforeEach((to, from, next) => {
  if(to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const context = {from, next, router, to};
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({...context, nextMiddleware});

  }
  return next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
