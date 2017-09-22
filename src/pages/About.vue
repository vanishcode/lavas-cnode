<template>
  <div class="about">
    <img src="https://cnodejs.org/public/images/cnodejs.svg" alt="cnode_logo">
    <!-- <h3>
      这是一个PWA项目，请用Chrome Android 60+访问
    </h3> -->
    
    <v-list two-line>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="indigo--text">phone</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>(650) 555-1234</v-list-tile-title>
          <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon dark>chat</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action></v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>(323) 555-6789</v-list-tile-title>
          <v-list-tile-sub-title>Work</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon dark>chat</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="indigo--text">mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
          <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action></v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
          <v-list-tile-sub-title>Work</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon class="indigo--text">location_on</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>1400 Main Street</v-list-tile-title>
          <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <div class="copyright">Copyright © {{ new Date().getFullYear() }} Vanishcode.</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'about',
  props: {},
  methods: {
    ...mapActions('appShell/appHeader', [
      'setAppHeader'
    ])

  },
  activated() {
    this.setAppHeader({
      show: true,
      title: '关于...',
      showMenu: false,
      showBack: true,
      showLogo: false,
      actions: [
        {
          icon: 'star_rate',
          act: function starThisProject() {
            window.location.href = 'https://www.github.com/vanishcode/lavas-cnode'
          }
        }
      ]
    });
  }
};
</script>

<style lang="stylus" scoped>
.about
    img
      margin 7% 0
      width 70%
    .copyright
      margin 5% auto
      left 0
      bottom 5%

</style>
