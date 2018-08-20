import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import cells from './modules/cells'


Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        cells,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})