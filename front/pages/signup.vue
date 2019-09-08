<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>signup</v-subheader>
          <v-form ref="form" v-model="vaild" @submit.prevent="onSubmitForm">
            <v-text-field 
              v-model="email"
              label="e-mail" 
              type="email" 
              :rules="emailRules"
              required 
            />
            <v-text-field 
              v-model="password"
              label="password" 
              type="password" 
              :rules="passwordRules"
              required 
            />
            <v-text-field 
              v-model="passwordCheck"
              label="passwordCheck" 
              type="password" 
              :rules="passwordCheckRules"
              required 
            />
            <v-text-field 
              v-model="nickname"
              label="nickname" 
              type="nickname" 
              :rules="nicknameRules"              
              required 
            />
            <v-checkbox
              v-model="terms"
              required
              :rules="[v => !!v || 'please check this.']"
              label="welcome to mystory"
            />
            <v-btn color="green" type="submit">signup</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vaild: false,
      email: '',
      password: '',
      passwordCheck: '',
      nickname: '',
      terms: false,
      emailRules: [
        v => !!v || 'email is required',
        v => /.+@.+/.test(v) || 'email is not vaild'
      ],
      nicknameRules: [
        v => !!v || 'nickname is required',
      ],
      passwordRules: [
        v => !!v || 'password is required',
      ],
      passwordCheckRules: [
        v => !!v || 'passwordCheck is required',
        v => v === this.password || 'Not equal to password'
      ]
    };
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/signUp', {
          nickname: this.nickname,
          email: this.email,
        })
          .then(()=>{
            this.$router.push({
              path: '/',
            });
          })
          .catch(()=> {
            alert('failed signup');
          });
      } 
    }
  }
};
</script>

<style>
</style>