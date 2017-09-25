<template>
<div class="app-user-page">
    <div class="app-user-title text-xs-center">
        <div class="user-avatar">
            <p>
                <v-icon v-if="!avatar" class="user-avatar-icon user-icon">face</v-icon>
                <v-avatar class="grey lighten-4" size="64px">
                    <img :src="avatar" alt="avatar">
                </v-avatar>
            </p>
            <p>{{username}}</p>
        </div>
        <div class="topics">
            <v-list subheader>
                <v-subheader>最近创建</v-subheader>
                <v-list-tile v-if="recent_topics.length==0">
                    <v-list-tile-content>
                        <v-list-tile-title>啥也咩有...(⊙ˍ⊙)</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <div v-for="item in recent_topics">
                    <v-list-tile avatar v-bind:key="item.title" @click="detail(item.id)" download>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                </div>
            </v-list>
        </div>

        <div class="reply">
            <v-list subheader>
                <v-subheader>最近参与</v-subheader>
                <v-list-tile v-if="recent_replies.length==0">
                    <v-list-tile-content>
                        <v-list-tile-title>啥也咩有...(⊙ˍ⊙)</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <div v-for="item in recent_replies">
                    <v-list-tile avatar v-bind:key="item.title" @click="detail(item.id)">
                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                </div>
            </v-list>
        </div>
    </div>
</div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';

export default {
    name: 'user',
    data() {
        return {
            avatar: JSON.parse(localStorage.getItem('UserInfo')).AvatarURL,
            username: JSON.parse(localStorage.getItem('UserInfo')).UserName,
            recent_topics: [],
            recent_replies: []
        };
    },
    methods: {
        detail(id) {
            this.$router.push(`/detail/${id}`)
        },
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ])
    },
    activated() {
        // load user data
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.username}`)
            .then(res => {
                //console.log(res)
                res.data.data.recent_topics.forEach(function(e) {
                    this.recent_topics.push({
                        id: e.id,
                        title: e.title,
                        subtitle: e.last_reply_at.substring(0, 10),
                    })
                    this.recent_replies.push({
                        id: e.id,
                        title: e.title,
                        subtitle: e.last_reply_at.substring(0, 10),
                    })
                }, this);
            })
            .catch(e => {
                alert(e)
                this.$router.go(-1)
            })
        // headbar
        var that = this
        this.setAppHeader({
            show: true,
            title: '我',
            showMenu: false,
            showBack: true,
            showLogo: false,
            actions: [{
                icon: 'exit_to_app',
                act: function() {
                    localStorage.UserInfo = 'null'
                    that.$router.push('/login')
                }
            }]
        });
    }
};
</script>

<style lang="stylus" scoped>

$user-icon-inactive-color := rgba($material-theme.text-color, $material-theme.inactive-icon-percent)
$user-icon-active-color := rgba($material-theme.text-color, $material-theme.active-icon-percent)

.user-icon
    color: $user-icon-inactive-color

.user-avatar
    color: $user-icon-active-color
    margin 10px auto 10px
    display flex
    justify-content center
    flex-direction column

    &-icon
        width 80px
        height 80px
        border-radius 50%
        background: $user-icon-inactive-color
        font-size 70px
    p
        margin 10px 0 0 0
.material-icons
    display inline-flex

</style>
