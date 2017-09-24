<template>
<div id="editor">
  <mavon-editor style="height: 90%" v-model="content" default_open="edit"></mavon-editor>

 <v-menu offset-y style="flex-grow:1">
      <v-btn primary dark slot="activator">版块</v-btn>
      <v-list>
        <v-list-tile @click="">
          <v-list-tile-title>31211</v-list-tile-title>
        </v-list-tile>
            <v-list-tile @click="">
          <v-list-tile-title>31211</v-list-tile-title>
        </v-list-tile>
            <v-list-tile @click="">
          <v-list-tile-title>31211</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

   
  
  <v-btn style="flex-grow:1">12222132</v-btn>
  <v-btn style="flex-grow:1">清空</v-btn>
</div>
</template>

<script>
import {
  mavonEditor
} from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import {
  mapActions
} from 'vuex';
export default {
  name: 'new',
  components: {
    mavonEditor
  },
  data() {
    return {
      content: '',
      toolbars: {
        preview: false
      }
    }
  },
  methods: {
    ...mapActions('appShell/appHeader', [
      'setAppHeader'
    ]),
  },
  activated() {
    var that = this
    this.setAppHeader({
      show: true,
      title: '创建新主题',
      showMenu: false,
      showBack: true,
      showLogo: false,
      actions: []
    });
  }
}
</script>

<style>

</style>
