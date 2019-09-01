<template>
  <div>
    <v-container>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>My Profile</v-subheader>
          <v-form>
            <v-text-field label="nickname" required />
            <v-btn color="blue" type="submit">edit</v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>following</v-subheader>
          <follow-list />
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>follower</v-subheader>
          <follow-list />
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
      name: "Nuxt.js"
    };
  }
};
</script>

<style>
</style>