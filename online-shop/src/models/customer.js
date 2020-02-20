import { queryCustomer, queryCustomerHistory } from "../services";
export default {
    namespace: 'customer',
    state: {
        customer: [],
        info: {},
    },
    effects: {
        *get(payload, { put, call }) {
            // Call saveTodoToServer, then trigger `add` action to save data
            const data = yield call(queryCustomer)
            console.log(data)
            yield put({ type: 'updateCustomerList', payload: data.data });
        },
        *add({payload}, {put}) {
            yield put({ type: 'save', payload})
        },
        *getInfo(payload, { put, call}) {
            // Call saveTodoToServer, then trigger `add` action to save data
            const data = yield call(queryCustomerHistory)
            console.log(data)
            yield put({ type: 'info', payload: data.data });
        }
    },
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
        'updateCustomerList'(state, {payload}) {
            const { customer } = state;
            return {
                ...state,
                customer: customer.concat(payload.entity),
            };
        },
        'info'(state, {payload}) {
            return {
                ...state,
                info: payload.entity,
            };
        },
        'save'(state, {payload}) {

            const { value, id } = payload;
            let list = [];
            let newCustomer = state.customer;
            const { customer } = state;
            if (id) {
                newCustomer = customer.map(item => {
                    if (item.id === payload.id) {
                        item = {
                            id: item.id,
                            ...value,
                        };
                    }
                    return item
                });
                console.log(newCustomer);
            } else {
                list.push({
                    id: (customer.length+1),
                    ...value,
                });
                newCustomer = customer.concat(list);
            }

            return {
                ...state,
                customer: newCustomer,
            };
        }
    },
};