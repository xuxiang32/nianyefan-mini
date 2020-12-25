import Vue from 'vue'
import App from './App'
import { commonRequest } from './utils/commonRequest.js'

Vue.prototype.$commonRequest = commonRequest
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
