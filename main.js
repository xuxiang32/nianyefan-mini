import Vue from 'vue'
import App from './App'
import { commonRequest } from './utils/commonRequest.js'
import NavBar from '@/components/lz-navBar/navBar.vue'


Vue.prototype.$commonRequest = commonRequest
Vue.config.productionTip = false
Vue.component("NavBar", NavBar);


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
