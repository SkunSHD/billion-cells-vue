<template>
    <li class="top-ruler__item" :style="'left: ' + leftPos + 'px;' + 'width:' + cellWidth + 'px;'">
        {{id}}
    </li>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';

    export default {
        props: ['ind'],
        computed: {
            ...mapGetters('cells', ['offsetLeftCol']),
            ...mapState('cells', ['x', 'cellWidth']),
            id() { return this.ind + this.offsetLeftCol + 1},
            leftPos() { return ((this.ind + this.offsetLeftCol) * this.cellWidth) - this.x; }
        },
    }
</script>

<style lang="scss" scoped>
    .top-ruler__item {
        position: absolute;
        bottom: 100%;
        background: lightgrey;
        border: 1px solid grey;
    }
</style>