import { querySale, queryInventory } from "../services";
export default {
    namespace: 'product',
    state: {
        sale: [],
        inventory: [],
    },
    effects: {
        *sale(payload, { put, call }) {
            // Call saveTodoToServer, then trigger `add` action to save data
            const data = yield call(querySale)
            console.log(data)
            yield put({ type: 'updateSaleList', payload: data.data });
        },
        *inventory(payload, { put, call }) {
            // Call saveTodoToServer, then trigger `add` action to save data
            const data = yield call(queryInventory)
            console.log(data)
            yield put({ type: 'updateInventoryList', payload: data.data });
        },
        *add({payload}, {put}) {
            yield put({ type: 'save', payload})
        },
    },
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
        'updateSaleList'(state, {payload}) {
            const { sale } = state;
            return {
                ...state,
                sale: sale.concat(payload.entity),
            };
        },
        'updateInventoryList'(state, {payload}) {
            const { inventory } = state;
            return {
                ...state,
                inventory: inventory.concat(payload.entity),
            };
        },
        'save'(state, {payload}) {
            const { value, id } = payload;
            let list = [];
            let newInventory = state.inventory;
            const { inventory } = state;
            if (id) {
                newInventory = inventory.map(item => {
                    if (item.id === payload.id) {
                        item = {
                            id: item.id,
                            ...value,
                        };
                    }
                    return item
                });
                console.log(newInventory);
            } else {
                list.push({
                    id: (inventory.length+1),
                    // FIXME
                    updateTime: '2020-03-31 13:00:00',
                    ...value,
                });
                newInventory = inventory.concat(list);
            }

            return {
                ...state,
                inventory: newInventory,
            };
        }
    },
};