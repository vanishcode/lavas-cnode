<template>
    <div>
        <div class="content">
            <h2>LAVAS - CNode</h2>

        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'home',
    props: {},
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ])

    },
    
    // 只在第一次加载时启用

    async asyncData() {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 8000);
        });
    },
    activated() {
        this.setAppHeader({
            show: true,
            title: 'Lavas',
            showMenu: true,
            showBack: false,
            showLogo: true,
            actions: [
                {
                    icon: 'mode_edit',
                    route: '/new',
                }
            ]
        });
    }
};
</script>

<style lang="stylus" scoped>
$text-color := rgba($material-theme.text-color, $material-theme.primary-text-percent)

.content

</style>
