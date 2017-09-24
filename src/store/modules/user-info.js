/**
 * @file 用户信息，包括ak,qrcode,用户数据/操作控制alert，loading
 * @author vanishcode(vanishcode@gmail.com)
 */


export default {
    state: {
        isLogin: false,
        isLoading: false
    },
    mutations: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        }
    }

}