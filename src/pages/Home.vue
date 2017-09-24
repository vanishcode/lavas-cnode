<template>
    <div>
        <div class="content">
            <v-list two-line>
                <template v-for="item in items">
                    
                    <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
                    <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
                    <v-list-tile avatar v-else v-bind:key="item.title" @click="tt" download>
                        <v-list-tile-avatar>
                            <img v-bind:src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                 <span style='font-size:15px!important;color:black'>为什么我写一个脚本，在本地运行的时候没问题，但在docker里面就会报错？SyntaxError: Unexpected token ...</span>
                                 
                                 <div style='overflow:hidden;white-space: nowrap;text-overflow:ellipsis!important;color:#8a8a8a;font-size:12px !important;'>因为 2016 年面试了很多做 Node.js 的同学，发现大部分做 Node 的同学都是前端转过来的，</div>
                            </v-list-tile-title>
                            
                            
                            <span style='font-size:10px!important;color:#6c6c6c'>13/13244&nbsp&nbsp|&nbsp &nbsp作者: 李大毛 &nbsp&nbsp|&nbsp &nbsp最后回复: 2018-9-11</span>
                        </v-list-tile-content>

                        
                       
                    </v-list-tile>
                   
                       <v-divider></v-divider>
                    
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
    name: 'home',
    props: {},
    data() {
        return {
            items: [
  
            {
                avatar: 'https://avatars1.githubusercontent.com/u/5373041?v=3&s=120',
                title: '<span class="grey--text text--lighten-1" style="margin-right:10px;float:right;font-size:10px">1113/13244</span>',
                subtitle: "",
                
            },
             {
                avatar: 'https://avatars1.githubusercontent.com/u/5373041?v=3&s=120',
                title: '<span class="grey--text text--lighten-1" style="margin-right:10px;float:right;font-size:10px">1113/13244</span>',
                subtitle: "",
                
            }, {
                avatar: 'https://avatars1.githubusercontent.com/u/5373041?v=3&s=120',
                title: '<span class="grey--text text--lighten-1" style="margin-right:10px;float:right;font-size:10px">1113/13244</span>',
                subtitle: "",
                
            }
            ]
        }
    },
    methods: {
        tt(){
            this.$router.push('/detail/o')
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
        var that=this
        this.setAppHeader({
            show: true,
            title: 'CNode - Node.js专业中文社区',
            showMenu: true,
            showBack: false,
            showLogo: true,
            actions: [{
                icon: 'mode_edit',
                act:function(){
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
