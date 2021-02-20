import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import LandingPage from './components/LandingPage.vue'
import LogInPage from './components/Log-In-Page.vue'
import BlogPosts from './components/BlogPosts.vue'
import RegistrationPage from './components/RegistrationPage.vue'

Vue.use(VueRouter);

import 'vue-material-design-icons/styles.css'


const routes = [
  
    {path:'/',  component: LandingPage},
    {path:'/loginhere',  component: LogInPage},
    {path:'/registerhere',  component: RegistrationPage},
    {path:'/blogposts',  component: BlogPosts},
    
];

const router = new VueRouter( {
  routes: routes
});

new Vue({
  el: '#app',
  router, 
  render: h => h(App)
});
