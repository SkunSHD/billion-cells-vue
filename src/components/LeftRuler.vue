<template>
    <div class="left-ruler">
        <ul class="list">
            <LeftRulerItem v-for="(val, ind) in grid" :ind="ind" :key="ind"/>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import LeftRulerItem from './LeftRulerItem.vue'

    export default {
        computed: {
            ...mapGetters('cells', ['visibleRows']),
            grid() { return Array(this.visibleRows).fill(''); }
        },
        components: { LeftRulerItem }
    }
</script>

<style lang="scss" scoped>
    .left-ruler {

        .list {
            list-style: none;
            position: relative;
        }
    }
</style>

