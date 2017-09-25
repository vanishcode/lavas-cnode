<template>
<div class="detail-wrapper">
        <v-list two-line>
            <v-list-tile avatar v-bind:key="article.title">
                <v-list-tile-avatar>
                    <img v-bind:src="article.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>
                        <span style='font-size:15px!important;color:black'>{{article.title}}</span>
                    </v-list-tile-title>
                    <span style='margin-top:5px;font-size:10px!important;color:#6c6c6c'>作者: {{article.author}}&nbsp&nbsp|&nbsp&nbsp来自: {{article.tab}}</span>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
        </v-list>
        <vue-markdown v-if="article.content">{{article.content}}</vue-markdown>

    
    <v-list three-line>
        <template v-for="item in reply_list">
            <v-divider v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-bind:key="item.title" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{item.author}} 说：</v-list-tile-title>
                <v-list-tile-sub-title><vue-markdown v-if="item.content">{{item.content}}</vue-markdown></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-list>
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
            article: {
                avatar: '',
                author: '',
                tab: '',
                title: '',
                content: ''
            },
            reply_list: [],
        }
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ])
    },
    async asyncData() {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 1500);
        });
    },
    activated() {
        var plate_name = {
            'good': '精华',
            'share': '分享',
            'job': '招聘',
            'ask': '问答'
        }
        // keep-alive 组件激活时调用
        this
            .$http(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}?mdrender=false`)
            .then(res => {
                //console.log(res);
                this.article.avatar = res.data.data.author.avatar_url;
                this.article.author = res.data.data.author.loginname;
                this.article.tab = plate_name[res.data.data.tab];
                this.article.title = res.data.data.title;
                this.article.content = res.data.data.content;

                //console.log(this.article.content)
                res.data.data.replies.forEach((e) => {
                    this.reply_list.push({
                        avatar: e.author.avatar_url,
                        content: e.content,
                        author: e.author.loginname,
                    })
                }, this);
                //console.log(this.posts_list)
            }).catch(e => {
                alert(e)
                this.$router.go(-1)
            })

        this.setAppHeader({
            show: true,
            title: '详情',
            showMenu: false,
            showBack: true,
            showLogo: false,
            actions: [{
                icon: 'send',
                act: function() {
                    alert('我还没做回复功能呢，下次吧！~~')
                }
            }]
        });
    },

};
</script>

<style lang="stylus">
@import url(https://necolas.github.io/normalize.css/7.0.0/normalize.css);
blockquote
    padding 0
    p
        font-size 15px !important
.detail-wrapper
    width 95%
    margin 0 auto
    img 
        max-width 100% !important;
        max-height 100% !important;
.detail-content
    font-size 16px
    line-height 30px
    margin-top 30px

    .detail-title
        margin-bottom 20px
        padding 10px 0
        font-size 36px
        font-weight bold
    .list_title_content
        padding-top 10px

.list__tile__title div p  
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
</style>
