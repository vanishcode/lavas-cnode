<template>
<div class="content">
    <v-list two-line>
        <template v-for="item in posts_list">
            <v-divider v-if="item.divider" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="item.title" @click="detail(item.id)">
                <v-list-tile-avatar>
                    <img v-bind:src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>
                        {{item.title}}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                        {{item.reply_count}}/{{item.visit_count}}&nbsp&nbsp|&nbsp&nbsp{{item.author}} &nbsp&nbsp|&nbsp&nbsp{{item.last_reply_at}}
                    </v-list-tile-sub-title>
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

export default {
    name: 'home',
    data() {
        return {
            posts_list: []
        }
    },
    methods: {
        detail(id) {
            this.$router.push(`/detail/${id}`)
        },
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ])
    },
    // 只在第一次加载时启用
    async asyncData() {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        });
    },
    activated() {
        this.posts_list = []
        this
            .$http(`https://cnodejs.org/api/v1/topics?tab=${this.$route.params.id}&mdrender=false`)
            .then(res => {
                //console.log(res)
                res.data.data.forEach((e, i) => {
                    this.posts_list.push({
                        avatar: e.author.avatar_url,
                        title: e.title,
                        visit_count: e.visit_count,
                        reply_count: e.reply_count,
                        author: e.author.loginname,
                        last_reply_at: e.last_reply_at.substring(0, 10),
                        id: e.id
                    })
                }, this);
                //console.log(this.posts_list)
            }).catch(e => {
                alert(e)
                 this.$router.go(-1)
            })
        var plate_name = {
            'all': 'CNode - Node.js专业中文社区',
            'good': '精华',
            'share': '分享',
            'job': '招聘',
            'ask': '问答'
        }
        var title = plate_name[this.$route.params.id]
        var that = this
        this.setAppHeader({
            show: true,
            title: title,
            showMenu: true,
            showBack: false,
            showLogo: true,
            actions: [{
                icon: 'mode_edit',
                act: function() {
                    that.$router.push('/new')
                }
            }]
        });
    }
};
</script>

<style lang="stylus" scoped>
$text-color := rgba($material-theme.text-color, $material-theme.primary-text-percent)

.content
    text-overflow:ellipsis;

</style>
