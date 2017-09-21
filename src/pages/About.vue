<template>
  <div>
    <h1>
      hello,i'm vanishcode
    </h1>
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

<style>

</style>
