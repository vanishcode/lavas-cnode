<template>
    <div class="app-user-page">
        <div class="app-user-title text-xs-center">
            <div class="user-avatar">
                <p>
                    <v-icon class="user-avatar-icon user-icon">face</v-icon>
                </p>
                <p>Lavas</p>
            </div>

            <v-list two-line subheader>
                <template v-for="item in items">

                    <v-subheader v-if="item.header" v-text="item.header"></v-subheader>

                    <v-list-tile avatar v-else v-bind:key="item.title" @click="" download>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider v-if="item.header"></v-divider>
                </template>
            </v-list>
      
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
            items: [{
                header: '最近回复'
            }, {
                title: 'Photos',
                icon: 'photo_library',
                subtitle: 'Jan 9, 2014'
            },
            {
                title: 'Favorites',
                icon: 'favorite',
                subtitle: 'Feb 9, 2016'
            },
            {
                title: 'Work',
                icon: 'message',
                subtitle: 'Nov 9, 2017'
            },
            {
                header: '最近cahugnjian'
            },
            {
                title: 'Work',
                icon: 'message',
                subtitle: 'Nov 9, 2017'
            }, {
                title: 'Work',
                icon: 'message',
                subtitle: 'Nov 9, 2017'
            }, {
                title: 'Work',
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
                    that.store.dispatch()
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
