<template>
    <div class="cells" @scroll="onScroll" :style="'height: '+ winHeight + 'px; width:' + winWidth + 'px;'">
        <ul class="list" :style="'height: '+ tableHeight + 'px; width:' + tableWidth + 'px;'">
            <Cell v-for="(val, ind) in grid"
                  :ind="ind"
                  :key="ind" />
        </ul>
    </div>
</template>

<script>
    import Cell from './Cell.vue'
    import { mapGetters, mapState, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapGetters('cells', ['grid', 'tableHeight', 'tableWidth']),
            ...mapState('cells', ['winHeight', 'winWidth']),
        },
        methods: {
            ...mapActions('cells', ['updateCoords']),
            onScroll(e) {
                this.updateCoords({
                    x: e.target.scrollLeft,
                    y: e.target.scrollTop
                })
            },
        },
        components: { Cell }
    }
</script>

<style lang="scss" scoped>
    .cells {
        background: salmon;
        overflow: scroll;

        .list {
            list-style: none;
            position: relative;
        }
    }
</style>

