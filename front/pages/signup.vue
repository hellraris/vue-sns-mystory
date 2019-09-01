<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>signup</v-subheader>
          <v-form>
            <v-text-field 
              label="e-mail" 
              type="email" 
              required 
            />
            <v-text-field 
              label="password" 
              type="password" 
              required 
            />
            <v-text-field 
              label="confirm password" 
              type="password" 
              required 
            />
            <v-text-field 
              label="nickname" 
              type="nicknames" 
              required 
            />
            <v-checkbox
              required
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
      name: "Nuxt.js"
    };
  }
};
</script>

<style>
</style>