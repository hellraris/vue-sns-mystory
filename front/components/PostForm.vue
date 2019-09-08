<template>
    <v-card style="margin-bottom: 20px">
        <v-container>
            <v-form ref="form" v-model="vaild" @submit.prevent="onSubmitForm">
                <v-textarea
                    v-model="content"
                    outlined
                    auto-grow
                    clearable
                    label="input text"
                    :hide-details="hideDetails"
                    :success-messages="successMessages"
                    :success="success"
                    :rules="[v => !!v.trim() || 'please input text.']"
                    @input="onChangeTextarea"
                />
            <v-btn type="submit" color="green" absolute right>submit</v-btn>
            <v-btn>upload image</v-btn>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            vaild: false,
            hideDetails: true,
            successMessages: '',
            success: false,
            content: '',
        }
    },
    computed: {
        ...mapState('users', ['me']),
    },
    methods: {
        onChangeTextarea(value) {
            if (value.length) {
                this.hideDetails = true;
                this.success = false;
                this.successMessages = '';
            }
        },
        onSubmitForm() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('posts/add', {
                    Content: this.content,
                    User: {
                        nickname: this.me.nickname,
                    },
                    Comments: [],
                    Images: [],
                    id: Date.now(),
                    createdAt: Date.now()
                })
                    .then(() => {
                        this.contents = '';
                        this.hideDetails = false;
                        this.success = true;
                        this.successMessages = 'success post!';
                    })
                    .catch(() => {

                    });
            }
        }
    }
}
</script>

<style scoped>

</style>