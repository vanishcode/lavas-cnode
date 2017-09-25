<template>
<div class="editor">

  <v-text-field label="标题" v-model="title" :rules="nameRules" required></v-text-field>

  <mavon-editor style="height: 75%" v-model="content" default_open="edit"></mavon-editor>

  <v-menu offset-y style="flex-grow:1">
    <v-btn light slot="activator">{{select}}</v-btn>
    <v-list>
      <v-list-tile @click="selectPlate('dev')">
        <v-list-tile-title>测试区</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="selectPlate('xixi')">
        <v-list-tile-title>别的不让</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>

  <v-btn error style="flex-grow:1" @click="clearContent">清空</v-btn>
  <v-btn primary style="flex-grow:1" @click="sendArticle">发送</v-btn>
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
      ak: JSON.parse(localStorage.getItem('UserInfo')).AccessToken,
      tab: '',
      select: '选择版块',
      content: '',
      title: '',
      nameRules: [
        (v) => !!v || '必须填写标题！',
        (v) => v.length >= 10 || '至少10个字！'
      ],
    }
  },
  methods: {
    ...mapActions('appShell/appHeader', [
      'setAppHeader'
    ]),
    selectPlate(e) {
      if (e == 'dev') {
        this.select = '测试区';
        this.tab = e;
      } else {
        this.select = '选择版块';
        return
      }
    },
    clearContent() {
      this.content = ''
      this.title = ''
    },
    sendArticle() {
      if (this.title == '' || this.content == '') return
      this.$http.post('https://cnodejs.org/api/v1/topics', {
        accesstoken: this.ak,
        title: this.title,
        tab: this.tab,
        content: this.content
      }).then(res => {
        console.log(res)
        this.$router.go(-1)
      }).catch(e => {
        alert(e)
      })
    }
  },
  activated() {
    var that = this
    this.setAppHeader({
      show: true,
      title: '创建新主题',
      showMenu: false,
      showBack: true,
      showLogo: false,
      actions: [{
        icon: 'info',
        act: function() {
          window.location.href = 'https://github.com/hinesboy/mavonEditor'
        }
      }]
    })
  }
}
</script>

<style lang="stylus">
.input-group__input
  input
    width 98%
</style>
