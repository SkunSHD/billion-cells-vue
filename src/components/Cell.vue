<template>
    <li class="cell-item"
        :key="id"
        :style="'top: ' + topPos + 'px;' + 'left: ' + leftPos + 'px;' + 'height: '+ cellHeight + 'px; width:' + cellWidth + 'px;'">
        <div class="info">
            <p class="info__p">id: {{id + 1}}</p>
            <p class="info__p">value: {{inputValue}}</p>
            <CellForm :ind="ind" :id="id" />
        </div>

    </li>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import CellForm from './CellForm.vue'

    export default {
        props: ['ind'],
        data: function() {
            return {
                isCheckboxChecked: false,
                localInputValue: '',
            }
        },
        computed: {
            ...mapState('cells', ['cellHeight', 'cellWidth', 'cellValues', 'size']),
            ...mapGetters('cells', ['visibleCols', 'offsetTopRow', 'offsetLeftCol']),

            inputValue() { return this.cellValues[this.id] && this.cellValues[this.id].inputValue; },
            rowInd() { return Math.floor(this.ind / this.visibleCols); },
            invisibleIndCellsTop() { return this.rowInd * (this.size - this.visibleCols); },

            id() { return this.ind + this.offsetLeftCol + this.topScrolledCells + this.invisibleIndCellsTop; },
            rowId() { return this.rowInd + Math.floor(this.topScrolledCells / this.size); },
            colId() { return this.ind % this.visibleCols + this.offsetLeftCol; },

            topScrolledCells() { return this.offsetTopRow * this.size; },
            totalRowWidth() { return (this.size - 1) * this.cellWidth; },
            totalColHeight() { return (this.size - 1) * this.cellHeight; },

            topPos() { return (this.rowInd + this.offsetTopRow) * this.cellHeight; },
            leftPos() { return (this.ind % this.visibleCols + this.offsetLeftCol) * this.cellWidth; },
        },
        components: { CellForm }
    }
</script>

<style lang="scss" scoped>
    .cell-item {
        position: absolute;
        box-sizing: border-box;

        .info {
            overflow: hidden;
            position: relative;
            height: 100%;
            border: 1px solid grey;
            white-space: nowrap;
            background: salmon;
            color: whitesmoke;

            .info__p {
                margin: 0;
            }
            .info__input {
                 height: 20px;
                width: 100%;
                margin:0;
                outline: none;
                padding: 0;
            }
        }
    }
</style>
