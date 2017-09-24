<template>
    <div>
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
</template>

<script>
import { mapActions } from 'vuex';
import VueMarkdown from 'vue-markdown';
export default {
    name: 'message',
    data() {
        return {
            items: [{
                header: '未读消息'
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
                header: '已读消息'
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
        this.setAppHeader({
            show: true,
            title: '消息',
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
