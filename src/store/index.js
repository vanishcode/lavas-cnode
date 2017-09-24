/**
 * @file store index
 * @author vanishcode(vanishcode@gmail.com)
 */

import Vue from 'vue';
import Vuex from 'vuex';
import appShell from './modules/app-shell';
import userInfo from './modules/user-info';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        appShell,
        userInfo
    }
});