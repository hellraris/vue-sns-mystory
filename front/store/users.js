export const state = () => ({
    me: null,
    followerList: [{
        id: 1,
        nickname: 'hellraris'
    }, {
        id: 2,
        nickname: 'senti'
    }, {
        id: 3,
        nickname: 'rara'
    }],
    followingList: [{
        id: 1,
        nickname: 'hellraris'
    }, {
        id: 2,
        nickname: 'senti'
    }, {
        id: 3,
        nickname: 'rara'
    }],
});

// 非同期作業はNG
export const mutations = {
    setMe(state, payload) {
        state.me = payload;
    }, 
    changeNickname(state, payload) {
        state.me.nickname = payload.nickname;
    },
    addFollower(state, payload) {
        state.followerList.push(payload);
    },
    addFollowing(state, payload) {
        state.followingList.push(payload);
    },
    removeFollower(state, payload) {
        const index = state.followerList.findIndex(v => v.id === payload.id);
        state.followerList.splice(index, 1);
    },
    removeFollowing(state, payload) {
        const index = state.followingList.findIndex(v => v.id === payload.id);
        state.followingList.splice(index, 1);
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
    },
    changeNickname({ commit }, payload) {
        commit('changeNickname', payload);
    },
    addFollower({ commit }, payload) {
        commit('addFollower', payload);
    },
    addFollowing({ commit }, payload) {
        commit('addFollowing', payload);
    },
    removeFollower({ commit }, payload) {
        commit('removeFollower', payload);
    },
    removeFollowing({ commit }, payload) {
        commit('removeFollowing', payload);
    },
}