<template>
    <v-container>
        <v-card>
            <v-form>
                <v-container>
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
                    <v-btn color="green" type="submit">login</v-btn>
                    <v-btn nuxt to="/signup">singup</v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-container>   
</template>

<script>
 export default {
     
 }
</script>

<style scoped>

</style>