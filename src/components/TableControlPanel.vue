<template>
    <div class="general-info">
        <div>
            <h3 class="general-info__title">size: {{size}} * {{size}}</h3>
            your value: <input class="general-info__input" type="text" id="size" v-on:input="onChangeInput">
        </div>
        <div>
            <h3 class="general-info__title">winHeight: {{winHeight}}</h3>
            your value: <input class="general-info__input" type="text" id="winHeight" v-on:input="onChangeInput">
        </div>
        <div>
            <h3 class="general-info__title">winWidth: {{winWidth}}</h3>
            your value: <input class="general-info__input" type="text" id="winWidth" v-on:input="onChangeInput">
        </div>
        <div>
            <h3 class="general-info__title">cellWidth: {{cellWidth}}</h3>
            your value: <input class="general-info__input" type="text" id="cellWidth" v-on:input="onChangeInput">
        </div>
        <div>
            <h3 class="general-info__title">cellHeight: {{cellHeight}}</h3>
            your value: <input class="general-info__input" type="text" id="cellHeight" v-on:input="onChangeInput">
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState('cells', ['size', 'cellHeight', 'cellWidth', 'winWidth', 'winHeight']),
        },
        methods: {
            ...mapActions('cells', ['updateTableParamsDebounced']),
            onChangeInput(e) {
                this.updateTableParamsDebounced({[e.target.id]: e.target.value});
            }
        },
    }
</script>

<style lang="scss">
    .general-info {
        text-align: center;

        .general-info__title {
            display: inline-block;
            margin: 0;
        }
        .general-info__input {
            width: 100px;
        }
    }
</style>