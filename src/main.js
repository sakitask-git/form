import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyDF5b5euuhQQ7xQBT5F_YglVKZMUq7BONI",
  authDomain: "wca-creative-dev.firebaseapp.com",
  projectId: "wca-creative-dev",
  storageBucket: "wca-creative-dev.appspot.com",
  messagingSenderId: "406459551195",
  appId: "1:406459551195:web:43dd1bac35933a39102bfe",
  measurementId: "G-ZTM3ZEZLEE"
}
firebase.initializeApp(config)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
