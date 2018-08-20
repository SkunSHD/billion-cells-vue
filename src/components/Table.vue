<template>
    <div class="table">
        <TopRuler />
        <LeftRuler />
        <Cells />
    </div>
</template>

<script>
    import Cells from './Cells.vue'
    import TopRuler from './TopRuler.vue'
    import LeftRuler from './LeftRuler.vue'

    export default {
        components: { Cells, TopRuler, LeftRuler }
    }
</script>

<style lang="scss" scoped>
    .table {
        position: relative;
        display: inline-block;
        padding-top: 20px;
        padding-left: 20px;
        overflow: hidden;
        margin: 30px;
        border: 1px solid gray;
    }
</style>

