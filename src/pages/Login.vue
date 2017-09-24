<template>
<div class="login">
  <!-- <v-alert
      success
      :value="alert"
      transition="scale-transition"
    >
     登陆成功
    </v-alert> -->
  <div class="login-input-ak">
    <v-text-field label="AccessToken,也可以扫描二维码↗" v-model="ak" :counter="36" required></v-text-field>
    <v-btn block secondary dark @click.native="login">登录</v-btn>
  </div>
</div>
</template>

<script>
import {
  mapActions,
  mapMutations
} from 'vuex';
import EventBus from '@/event-bus';
export default {
  name: 'login',
  comments: {},
  data() {
    return {
      ak: '',
      alert: false
    }
  },

  mounted() {
    if (this.$route.path == '/login') {
      Qrcode.init($('[node-type=qr-btn]'))
    }
    $('.tmp').bind('click', function() {
      EventBus.$emit('input-ak-through-qrcode', $(this).val())
    })
  },
  methods: {
    ...mapActions('appShell/appHeader', [
      'setAppHeader'
    ]),
    ...mapMutations('userInfo/', [
      'login'
    ]),
    login() {
      console.log(this.ak)
      this.$http.post('https://cnodejs.org/api/v1/accesstoken', {
        accesstoken: this.ak
      }).then(res => {
        this.alert = !this.alert
        this.$store.commit('login');
        localStorage.UserInfo =
          JSON.stringify({
            id: res.data.id,
            AccessToken: this.ak,
            UserName: res.data.loginname,
            AvatarURL: res.data.avatar_url
          })
        this.$router.go(-1)
        this.ak = ''
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
