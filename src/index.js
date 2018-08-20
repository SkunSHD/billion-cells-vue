import Vue from 'vue'
import App from './components/App.vue'
import store from './store/store'

new Vue({
    el: '#root',
    store,
    render: h => h(App)
});

Vue.config.productionTip = false;