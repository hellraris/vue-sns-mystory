<template>
  <v-container>
    <v-card>
      <v-form ref="form" v-model="vaild" @submit.prevent="onSubmitForm">
        <v-container>
          <v-text-field label="e-mail" type="email" :rules="emailRules" required />
          <v-text-field label="password" type="password" :rules="passwordRules" required />
          <v-btn color="green" type="submit" :disabled="!vaild">login</v-btn>
          <v-btn nuxt to="/signup">singup</v-btn>
        </v-container>
      </v-form>
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
  methods: {
      onSubmitForm() {
          this.$refs.form.validate();
      }
  }
};
</script>

<style scoped>
</style>