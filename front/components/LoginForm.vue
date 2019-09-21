<template>
  <v-container v-if="!me">
    <v-card>
      <v-form ref="form" v-model="vaild" @submit.prevent="onSubmitForm">
        <v-container>
          <v-text-field label="e-mail" type="email" v-model="email" :rules="emailRules" required />
          <v-text-field label="password" type="password" v-model="password" :rules="passwordRules" required />
          <v-btn color="green" type="submit" :disabled="!vaild">login</v-btn>
          <v-btn nuxt to="/signup">singup</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-card>
      <v-container>
        {{ me.nickname }} login
        <v-btn @click="onLogOut">logout</v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      vaild: false,
      email: "",
      password: "",
      emailRules: [
        v => !!v || "email is required",
        v => /.+@.+/.test(v) || "email is not vaild"
      ],
      passwordRules: [
        v => !!v || "password is required"
      ]
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  methods: {
      onSubmitForm() {
          if (this.$refs.form.validate()) {
            this.$store.dispatch('users/logIn', {
              email: this.email,
              password: this.password,
            })
          }
      },
      onLogOut() {
          this.$store.dispatch('users/logOut')
      }
  }
};
</script>

<style scoped>
</style>