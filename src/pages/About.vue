<template>
<div class="about">
  <img src="https://cnodejs.org/public/images/cnodejs.svg" alt="cnode_logo">
  <h4>
    CNode PWA
  </h4>

  <v-list two-line>
    <v-divider></v-divider>

    <v-list-tile @click="openURL('http://lavas.baidu.com/')">
      <v-list-tile-action>
        <v-icon>turned_in</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>项目基于</v-list-tile-title>
        <v-list-tile-sub-title>Baidu Lavas</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon dark>call_made</v-icon>
      </v-list-tile-action>
    </v-list-tile>

    <v-divider></v-divider>

    <v-list-tile @click="openURL('https://www.github.com/vanishcode/lavas-cnode/')">
      <v-list-tile-action>
        <v-icon>link</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>项目地址</v-list-tile-title>
        <v-list-tile-sub-title>lavas-cnode</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon dark>call_made</v-icon>
      </v-list-tile-action>
    </v-list-tile>

    <v-divider></v-divider>

    <v-list-tile @click="openURL('https://www.cnodejs.org/')">
      <v-list-tile-action>
        <v-icon>people</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>CNode社区</v-list-tile-title>
        <v-list-tile-sub-title>https://cnodejs.org/</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon dark>call_made</v-icon>
      </v-list-tile-action>
    </v-list-tile>

    <v-divider></v-divider>

    <v-list-tile @click="openURL('https://cnodejs.org/user/vanishcode/')">
      <v-list-tile-action>
        <v-icon>
          face
        </v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>作者</v-list-tile-title>
        <v-list-tile-sub-title>vanishcode</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-divider></v-divider>

    <v-list-tile @click="openURL('mailto:vanishcode@gmail.com')">
      <v-list-tile-action>
        <v-icon>mail</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>反馈bug</v-list-tile-title>
        <v-list-tile-sub-title>发送电子邮件</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon dark>call_made</v-icon>
      </v-list-tile-action>
    </v-list-tile>

    <v-divider></v-divider>

  </v-list>
  <div class="copyright">Copyright © {{ new Date().getFullYear() }} Vanishcode.</div>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex';

export default {
  name: 'about',
  props: {},
  methods: {
    ...mapActions('appShell/appHeader', [
      'setAppHeader'
    ]),
    openURL(url){
      window.location.href = url
    }
  },
  activated() {
    this.setAppHeader({
      show: true,
      title: '关于...',
      showMenu: false,
      showBack: true,
      showLogo: false,
      actions: [{
        icon: 'star_rate',
        act: function starThisProject() {
          window.location.href = 'https://www.github.com/vanishcode/lavas-cnode'
        }
      }]
    });
  }
};
</script>

<style lang="stylus" scoped>
.about
    img
      margin-top 7%
      width 70%
    h4
      margin 2%

    .copyright
      margin 3% auto
      color #707070

</style>
