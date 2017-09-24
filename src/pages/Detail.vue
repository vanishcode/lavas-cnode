<template>
<div class="detail-wrapper">
    <vue-markdown>{{content}}</vue-markdown>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';
import VueMarkdown from 'vue-markdown';

export default {
    name: 'detail',
    components: {
        VueMarkdown
    },
    data() {
        return {
            content: "按照我的理解，一个`appid`对应一个`access_token` (可以刷新)，但是我看的[wechat-oauth](https://github.com/node-webot/wechat-oauth)库的markdown有个例子\r\n#### 自定义saveToken方法\r\n```\r\nTokenSchema.statics.setToken = function (openid, token, cb) {\r\n  // 有则更新，无则添加\r\n  var query = {openid: openid};\r\n  var options = {upsert: true};\r\n  this.update(query, token, options, function (err, result) {\r\n    if (err) throw err;\r\n    return cb(null);\r\n  });\r\n};\r\n\r\nmongoose.model('Token', 'TokenSchema');\r\n```\r\n#### 初始化：\r\n```\r\nvar client = new OAuth(appid, secret, function (openid, callback) {\r\n  // 传入一个根据openid获取对应的全局token的方法\r\n  // 在getUser时会通过该方法来获取token\r\n  Token.getToken(openid, callback);\r\n}, function (openid, token, callback) {\r\n  // 持久化时请注意，每个openid都对应一个唯一的token!\r\n  Token.setToken(openid, token, callback);\r\n});\r\n```\r\n为什么每个openid都对应一个唯一的token？求指点"
        }
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ])
    },
    async asyncData() {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 500);
        });
    },
    activated() {
        // keep-alive 组件激活时调用
        console.log(this.$route.params)
        this.setAppHeader({
            show: true,
            title: '详情',
            showMenu: false,
            showBack: true,
            showLogo: false,
            actions: [{
                icon: 'send',
                act: function() {
                    alert('haha')
                }
            }]
        });
    },

};
</script>

<style lang="stylus" scoped>
.detail-wrapper
    width 95%
    margin 0 auto
// @import url(https://necolas.github.io/normalize.css/7.0.0/normalize.css);
.detail-content
    font-size 16px
    line-height 30px
    margin-top 30px

    .detail-title
        margin-bottom 20px
        padding 10px 0
        font-size 36px
        font-weight bold

</style>
