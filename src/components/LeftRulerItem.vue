<template>
    <li class="top-ruler__item" :style="'top: ' + topPos + 'px;' + 'height:' + cellHeight + 'px;'">
        {{id}}
    </li>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';

    export default {
        props: ['ind'],
        computed: {
            ...mapGetters('cells', ['offsetTopRow']),
            ...mapState('cells', ['y', 'cellHeight']),
            id() { return this.ind + this.offsetTopRow + 1},
            topPos() { return ((this.ind + this.offsetTopRow) * this.cellHeight) - this.y; }
        },
    }
</script>

<style lang="scss" scoped>
    .top-ruler__item {
        position: absolute;
        width: 20px;
        right: 100%;
        background: lightgrey;
        border: 1px solid grey;
        writing-mode: vertical-rl;
        text-orientation: upright;
    }
</style>