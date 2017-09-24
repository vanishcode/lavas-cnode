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
        <div class="content">
            <v-list subheader>
                <v-subheader>最近创建</v-subheader>
                <v-list-tile v-for="item in items" avatar v-bind:key="item.title" @click="" download>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
            </v-list>

            <v-list subheader>
                <v-subheader>最近回复</v-subheader>
                <v-list-tile v-for="item in items" avatar v-bind:key="item.title" @click="">
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
            </v-list>

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
            items: [{
                    title: 'Node.js重量级应用中到底表现如何？若是和Java和Python比较呢？',
                    icon: 'photo_library',
                    subtitle: 'Jan 9, 2014'
                },
                {
                    title: 'Favorites',
                    icon: 'favorite',
                    subtitle: 'Feb 9, 2016'
                },
                {
                    title: 'Node.js重量级应用中到底表现如何？若是和Java和Python比较呢？',
                    icon: 'message',
                    subtitle: 'Nov 9, 2017'
                },
            ]
        };
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ])
    },
    activated() {
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
