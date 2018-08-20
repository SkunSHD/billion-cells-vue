import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils';
import cellsModule from "../store/modules/cells";

const localVue = createLocalVue();
localVue.use(Vuex);


describe('Store', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                cells: cellsModule
            }
        });
    });

    it("the 'updateInput' action works", () => {
        const mockValue = { id: 1, inputValue: 222, checked: true };
        store.dispatch('cells/updateInput', mockValue);
        expect(store.state.cells.cellValues[mockValue.id].inputValue).toBe(mockValue.inputValue);
    });

    it("the 'updateCoords' action works", () => {
        const [key, value] = ['x', 100];
        store.dispatch('cells/updateCoords', {[key]: value});
        expect(store.state.cells[key]).toBe(value);
    })
});