<template>
  <div class="login">
    <div class="login-input-ak">
      <v-text-field label="AccessToken,也可以扫描二维码↗" v-model="ak" :counter="36" required></v-text-field>
      <v-btn block secondary dark @click.native="login">登录</v-btn>
    </div>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex';
import EventBus from '@/event-bus';
export default {
  name: 'login',
  comments: {},
  data() {
    return {
      ak: ''
    }
  },
  methods: {
    ...mapActions('appShell/appHeader', [
      'setAppHeader'
    ]),
    login() {
      console.log(this.ak)
      this.$http.post('https://cnodejs.org/api/v1/accesstoken', {
        accesstoken: this.ak
      }).then(res => {
        console.log(res)
        EventBus.$emit('alert',)
        //alert(`hello,${res.data.loginname}!`)
      }).catch(e => {
        alert(e)
      })
    }
  },

  activated() {
    EventBus.$on('input-ak-through-qrcode', eventData => {
        this.ak = eventData
      }),
      this.setAppHeader({
        show: true,
        title: '请登录',
        showMenu: false,
        showBack: true,
        showLogo: false,
        actions: [{
          icon: 'aspect_ratio',
          act: function(eventData) {
            $('.qr-btn').click()
          }
        }]
      });
  }
}
</script>

<style lang="stylus" acoped>
.login
    display: flex; 
    justify-content: center; 
    align-items: center;
.login-input-ak
    width 80%

</style>
