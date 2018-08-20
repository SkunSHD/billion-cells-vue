<template>
    <div class="cell-form">
        <input class="cell-form__input"
               type="checkbox"
               :checked="checkedLocal"
               v-on:change="onCheckboxChange">

        <input class="cell-form__input"
               ref="input"
               v-bind:disabled="checkedLocal"
               v-on:input="onInputChange"
               :value="inputValueLocal" />

        <button class="cell-form__button"
                v-on:click="onSaveClick"
                v-if="isFormChanged">
            Save changes
        </button>
    </div>

</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        props: ['ind', 'id'],
        data: function() {
            return {
                inputValueLocal: '',
                checkedLocal: false,
            }
        },
        computed: {
            ...mapState('cells', ['cellValues']),
            isFormChanged() {
                const { checked, inputValue } = this.cellValues[this.id] || { inputValue: '', checked: false };
                return checked !== this.checkedLocal || inputValue !== this.inputValueLocal;
            }
        },
        methods: {
            ...mapActions('cells', ['updateInput']),
            initFormValues() {
                if(this.cellValues[this.id]) {
                    const {checked, inputValue} = this.cellValues[this.id];
                    this.inputValueLocal = inputValue;
                    this.checkedLocal = checked;
                }
            },
            onCheckboxChange(e) {
                this.checkedLocal = e.target.checked;
            },
            onInputChange(e) {
                e.preventDefault();
                const regEx = /[^0-9]/gi;
                const newValue = e.target.value;

                if(regEx.test(newValue)) { // invalid
                    const validatedNewValue = newValue.replace(regEx, '');
                    this.$refs.input.value = validatedNewValue;
                    this.inputValueLocal = validatedNewValue;
                } else { // valid
                    this.inputValueLocal = newValue;
                }
            },
            onSaveClick() {
                const newCellValue = {
                    id: this.id,
                    inputValue: this.inputValueLocal,
                    checked: this.checkedLocal
                };
                this.updateInput(newCellValue)
            }
        },
        created: function() {
            this.initFormValues();
        }
    }
</script>

<style lang="scss" scoped>
    .cell-form {
        .cell-form__input {
            display: block;
            margin-bottom: 5px;
        }

        .cell-form__input:disabled {
            background: darkgray;
        }

        .cell-form__button {
            font-size: 12px;
            background: greenyellow;
        }
    }
</style>
