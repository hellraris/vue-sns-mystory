export const state = () => ({
    mainPosts: [],
});

export const mutations = {
    addMainPost(state, payload) {
        // push()は配列の最後に追加、unshift()は配列の最前に追加
        state.mainPosts.unshift(payload);
    },
    removeMainPost(state, payload) {
        const index = state.mainPosts.findIndex( v => v.id === payload.id);
        state.mainPosts.splice(index, 1);
    },
};

export const actions = {
    add({ commit }, payload) {
        commit('addMainPost', payload);
    },
    remove({ commit }, payload) {
        commit('removeMainPost', payload);
    }
};