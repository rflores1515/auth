import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from "firebase";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


var firebaseConfig = {
  apiKey: "AIzaSyBy7_hk8YyQ6BBvcWHFH8Fhjv2VYt9a2jY",
  authDomain: "auth-38331.firebaseapp.com",
  projectId: "auth-38331",
  storageBucket: "auth-38331.appspot.com",
  messagingSenderId: "54947165485",
  appId: "1:54947165485:web:1e2a0f8c825292895e4fa4",
  measurementId: "G-LTMJP9W8XC"
};
// Initialize Firebase
 
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
