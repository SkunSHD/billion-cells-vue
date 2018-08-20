<template>
    <div class="top-ruler">
        <ul class="list">
            <TopRulerItem v-for="(val, ind) in grid" :ind="ind" :key="ind"/>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import TopRulerItem from './TopRulerItem.vue'

    export default {
        computed: {
            ...mapGetters('cells', ['visibleCols']),
            grid() { return Array(this.visibleCols).fill(''); }
        },
        components: { TopRulerItem }
    }
</script>

<style lang="scss" scoped>
    .top-ruler {

        .list {
            list-style: none;
            position: relative;
        }
    }
</style>

