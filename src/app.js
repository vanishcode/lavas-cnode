/**
 * @file entry
 * @author vanishcode(vanishcode@gmail.com)
 */

import Vue from 'vue';
import {
    Vuetify,
    VBtn,
    VApp,
    VList,
    VIcon,
    VProgressCircular,
    VDivider,
    VBottomNav,
    VGrid,
    VAvatar,
    VTextField,
    VAlert

} from 'vuetify';
import { createRouter } from './router';
import store from './store';
import App from './App.vue';
import Icon from 'vue-awesome/components/Icon.vue';
import Badge from 'vuetify/src/directives/badge';

import axios from 'axios'

Vue.prototype.$http = axios

//Vue.directive(Badge)

Vue.use(Vuetify, {
    components: {
        VApp,
        VBtn,
        VList,
        VIcon,
        VProgressCircular,
        VDivider,
        VBottomNav,
        VGrid,
        VAvatar,
        VTextField,
        VAlert
    }
});

Vue.component('icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
export function createApp() {
    let router = createRouter();
    let app = new Vue({
        router,
        store,
        ...App
    });
    return { app, router, store };
}