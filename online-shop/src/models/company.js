import { queryCompanyInfo } from "../services";
export default {
    namespace: 'company',
    state: {},
    effects: {
        *get(payload, { put, call }) {
            // Call saveTodoToServer, then trigger `add` action to save data
            const data = yield call(queryCompanyInfo)
            console.log(data)

            yield put({ type: 'save', payload: data.data });
        },
    },
    reducers: {
        'save'(state, {payload}) {
            return {
                ...payload.entity,
            }
        },
    },
};
