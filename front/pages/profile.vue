<template>
  <div>
    <v-container>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>My Profile</v-subheader>
          <v-form v-modal="valid" @submit.prevent="onChangeNickname">
            <v-text-field
              v-model="nickname" 
              label="nickname" 
              :rules="nicknameRules"
              required />
            <v-btn color="blue" type="submit">edit</v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>following</v-subheader>
          <follow-list :users="followingList" :remove="removeFollowing" />
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>follower</v-subheader>
          <follow-list :users="followerList" :remove="removeFollower" />
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import FollowList from '~/components/FollowList'

export default {
  components: {
    FollowList,
  },
  data() {
    return {
      valid: false,
      nickname: '',
      nicknameRules: [
        v => !!v || 'please input nickname'
      ],
    };
  },
  computed: {
    followerList() {
      return this.$store.state.users.followerList;
    },
    followingList() {
      return this.$store.state.users.followingList;
    },
  },
  methods: {
    onChangeNickname() {
      this.$store.dispatch('users/changeNickname', {
        nickname: this.nickname,
      })
    },
    removeFollowing(id) {
      this.$store.dispatch('users/removeFollowing', { id });
    },
    removeFollower(id) {
      this.$store.dispatch('users/removeFollower', { id });
    },
  },
  middleware: 'authenticated',
};
</script>

<style>
</style>