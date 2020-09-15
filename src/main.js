import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import UUID from 'vue-uuid'  
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://192.168.1.27:3000',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}))

  
Vue.use(UUID);  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
