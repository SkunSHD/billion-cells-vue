<template>
    <div id="root" class='container' >
        <h1 class="app_logo">Billion Cells!</h1>
        <hr>
        <TableControlPanel />
        <Table />
    </div>
</template>

<script>
    import Table from './Table.vue'
    import TableControlPanel from './TableControlPanel.vue'

    export default {
        components: { Table, TableControlPanel },
        created() {
            // We have a grid 40000x40000
            // Data should be loaded dynamically
            this.$store.dispatch('cells/initState', { tableSize: 40000 });
        }
    }
</script>

<style lang="scss">
    @import 'src/styles/normalize.scss';

    body {
        min-height: 97vh;
    }
    .container {
        width: 800px;
        margin: 0 auto;
        text-align: center;

        .app_logo {
            text-align: center;
        }
    }
</style>