export const state = () => ({
    me: null,
});

// 非同期作業はNG
export const mutations = {
    setMe(state, payload) {
        state.me = payload;
    }, 
};

// 非同期作業もOK
export const actions = {
    // context
    // { commit, dispatch, state, getters, rootState(indexのstate), rootGetters(indexのgetters)}
    signUp({ commit }, payload) {
        commit('setMe', payload);
    }, 
    logIn({ commit }, payload) {
        commit('setMe', payload);
    },
    logOut({ commit }, payload) {
        commit('setMe', null);
    }
}