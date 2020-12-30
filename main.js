import Vue from 'vue'
import App from './App'
import NavBar from '@/components/lz-navBar/navBar.vue'


Vue.config.productionTip = false
Vue.component("NavBar", NavBar);


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
