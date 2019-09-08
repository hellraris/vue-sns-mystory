export const state = () => ({
    mainPosts: [],
    hasMorePost: true,
});

const totalPosts = 51;
const limit = 10;

export const mutations = {
    addMainPost(state, payload) {
        // push()は配列の最後に追加、unshift()は配列の最前に追加
        state.mainPosts.unshift(payload);
    },
    removeMainPost(state, payload) {
        const index = state.mainPosts.findIndex( v => v.id === payload.id);
        state.mainPosts.splice(index, 1);
    },
    addComment(state, payload) {
        const index = state.mainPosts.findIndex( v => v.id === payload.postId);
        state.mainPosts[index].Comments.unshift(payload);
    },
    loadPosts(state) {
      const diff = totalPosts - state.mainPosts.length;
      const fakePosts = Array(diff > limit ? limit : diff).fill().map(V => ({
        id: Math.random().toString(),
        User: {
          id: 1,
          nickname: 'hellraris'
        },
        content: `Hello infinite scrolling~ ${Math.random()}`,
        Commments: [],
        Images: [],
      }));
      state.mainPosts = state.mainPosts.concat(fakePosts);
      state.hasMorePost = fakePosts.length === limit;
    },
};

export const actions = {
    add({ commit }, payload) {
        commit('addMainPost', payload);
    },
    remove({ commit }, payload) {
        commit('removeMainPost', payload);
    },
    addComment({ commit }, payload) {
        commit('addComment', payload);
    },
    loadPosts({ commit, state }, payload) {
      if (state.hasMorePost) {
        commit('loadPosts');
      }
    }
};