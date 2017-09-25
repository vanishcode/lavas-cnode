<template>
<div class="message">
    <div class="topics">
        <v-list subheader>
            <v-subheader>未读消息</v-subheader>

            <v-list-tile v-if="has_not_read_messages.length==0">
                <v-list-tile-content>
                    <v-list-tile-title>啥也咩有...(⊙ˍ⊙)</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <div v-for="item in has_not_read_messages">
                <v-list-tile avatar v-bind:key="item.title" @click="detail(item.id)" download>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title>回复者: {{item.author}}&nbsp|&nbsp{{item.subtitle}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
            </div>
        </v-list>
    </div>

    <div class="reply">
        <v-list subheader>
            <v-subheader>已读消息</v-subheader>

            <v-list-tile v-if="has_read_messages.length==0">
                <v-list-tile-content>
                    <v-list-tile-title>啥也咩有...(⊙ˍ⊙)</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <div v-for="item in has_read_messages">
                <v-list-tile avatar v-bind:key="item.title" @click="detail(item.id)">
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title>回复者: {{item.author}}&nbsp|&nbsp{{item.subtitle}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
            </div>
        </v-list>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';
import VueMarkdown from 'vue-markdown';
export default {
    name: 'message',
    data() {
        return {
            ak: JSON.parse(localStorage.getItem('UserInfo')).AccessToken,
            has_not_read_messages: [],
            has_read_messages: []
        }
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        detail(id) {
            this.$router.push(`/detail/${id}`)
        },
    },
    async asyncData() {
        await new Promise((resolve, reject) => {
            //console.log('asyncData')
            setTimeout(resolve, 1000);
        });
    },
    activated() {
        // load messages
        this.$http.get(`https://cnodejs.org/api/v1/messages?accesstoken=${this.ak}`)
            .then(res => {
                console.log(res)
                res.data.data.hasnot_read_messages.forEach(function(e) {
                    this.has_not_read_messages.push({
                        id:e.topic.id,
                        title:e.topic.title,
                        subtitle:e.topic.last_reply_at.substring(0, 10),
                        author:e.author.loginname
                    })
                }, this);

                for (let i = 0; i < 10; i++) {
                    this.has_read_messages.push({
                        id:res.data.data.has_read_messages[i].topic.id,
                        author:res.data.data.has_read_messages[i].author.loginname,
                        title:res.data.data.has_read_messages[i].topic.title,
                        subtitle:res.data.data.has_read_messages[i].topic.last_reply_at.substring(0, 10)
                    })
                };
            })
            .catch(e => {
                alert(e)
                this.$router.go(-1)
            })
        // set headbar
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
