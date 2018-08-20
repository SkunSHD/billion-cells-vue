import Vue from 'vue'
import vueLogger from "vue-logger";

export default function createLogger() {
    Vue.use(vueLogger, {
        prefix: () => new Date(),
        dev: true,
        shortname: true,
        levels: ["log", "warn", "debug", "error", "dir"],
        forceLevels: []
    });
}