const state = {
    size: 0,
    cellWidth: 120,
    cellHeight: 120,
    winWidth: 600,
    winHeight: 400,
    x: 0,
    y: 0,
    cellValues: {}
};


const getters = {
    offsetLeftCol: state => Math.floor(state.x / state.cellWidth),
    offsetTopRow: state => Math.floor(state.y / state.cellHeight),

    tableWidth: state => state.size * state.cellWidth,
    tableHeight: state => state.size * state.cellHeight,

    isColsEnded({x, cellWidth, winWidth, size}) { return (Math.floor(x/cellWidth) + Math.ceil(winWidth/cellWidth)) === size },
    isRowsEnded({y, cellHeight, winHeight, size}) { return (Math.floor(y/cellHeight) + Math.ceil(winHeight/cellHeight)) === size },

    colSpareCellCount: (state, store) => store.isColsEnded ? 0 : 1,
    rowSpareCellCount: (state, store) => store.isRowsEnded ? 0 : 1,

    visibleCols: (state, store) => {
        return store.tableWidth < state.winWidth ?
            state.size
            :
            Math.ceil(state.winWidth / state.cellWidth) + store.colSpareCellCount;
    },

    visibleRows: (state, store) => {
        return store.tableHeight < state.winHeight ?
            state.size
            :
            Math.ceil(state.winHeight / state.cellHeight) + store.rowSpareCellCount
    },
    // Virtual cells that we see on the screen
    grid: (state, store) => Array(store.visibleRows * store.visibleCols).fill(''),
};


const actions = {
    updateInput({ commit }, { id, inputValue, checked }) {
        const newValue = {
            [id]: {
                inputValue,
                checked
            }
        };
        commit('updateInput', newValue);
    },
    updateCoords({ commit }, coords) {
        commit('updateCoords', coords);
    },
    updateTableParams({ commit }, newTableValues) {
        commit('updateTableParams', newTableValues);
    },
    updateTableParamsDebounced: (()=> {
        let timer = null;

        return (...params)=> {
            if(timer > 0) clearTimeout(timer);

            timer = setTimeout(
                () => {
                    actions.updateTableParams(...params);
                    timer = null;
                },
                500);
        }
    })(),
    initState({commit}, {tableSize, cellValues}) {
        commit('initState', {tableSize, cellValues});
    }
};


const mutations = {
    updateInput(state, newValue) {
        state.cellValues = {
            ...state.cellValues,
            ...newValue
        };
        // When a user clicks on it, all modified data should appear in the console
        console.log('%%---> new input values', newValue)
    },
    updateCoords(state, {x, y}) {
        if(x !== state.x) state.x = x;
        if(y !== state.y) state.y = y;
    },
    initState(state, {tableSize, cellValues}) {
        if(tableSize) state.size = tableSize;
        if(cellValues) state.cellValues = cellValues;
    },
    updateTableParams(state, newParams) {
        for(let newParamName in newParams) {
            let newParamValue = newParams[newParamName];
            if(typeof newParamValue === 'string') newParamValue = Number(newParamValue);
            if(newParamValue) state[newParamName] = newParamValue;
        }
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
