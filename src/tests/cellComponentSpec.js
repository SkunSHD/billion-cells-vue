import Vuex from "vuex";
import { shallowMount, createLocalVue } from '@vue/test-utils';
import CellForm from '../components/CellForm.vue';
import cellsModule from "../store/modules/cells";

const localVue = createLocalVue();
localVue.use(Vuex);


describe('CellForm.vue', () => {
    let store;
    let propsData;
    let actions;
    let mutations;

    beforeEach(() => {
        actions = cellsModule.actions;
        mutations = cellsModule.mutations;

        store = new Vuex.Store({
            modules: {
                cells: {
                    namespaced: true,
                    state: {
                        cellValues: {
                            1: {
                                inputValue: 300,
                                checked: false
                            }
                        }
                    },
                    actions,
                    mutations
                }
            }
        });
        propsData = {
            ind: 0,
            id: 1
        };
    });


    it('displays item\'s value from the cells list', () => {
        const wrapper = shallowMount(CellForm, { store, localVue, propsData });
        const input = wrapper.findAll('input').at(1);
        expect(input.element.value).toBe('300');
    });

    it('displays change of item\'s value from the cells list', () => {
        const newInputValue = '100';
        const wrapper = shallowMount(CellForm, { store, localVue, propsData });
        const input = wrapper.findAll('input').at(1);
        input.element.value = newInputValue;
        input.trigger('input');
        wrapper.find('button').trigger('click');
        expect(store.state.cells.cellValues['1'].inputValue).toBe(newInputValue);
    });
});