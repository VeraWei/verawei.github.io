export default {
    namespace: 'users',
    state: [],
    reducers: {
        'checkUserAuth'(state, {payload: user}) {
            return 
        },
        'in'(state, { payload: user }) {
            return state.filter(item => (item.username === user.username) && (item.password === user.password));
        },
    },
};
