<template>
    <v-form ref="form" v-model="vaild" style="position: relative" @submit.prevent="onSubmitForm">
        <v-textarea
            v-model="content"
            filled
            auto-grow
            label="comment"
            :hide-details="hideDetails"
            :success="success"
            :success-messages="successMessages"
            @input="onChangeTextarea"
        />
        <v-btn color="green" dark absolute top right type="submit">write</v-btn>
    </v-form>
</template>

<script>
export default {
    props: {
        postId: {
            type:String,
            requierd: true,
        },
    },
    data () {
        return {
            vaild: false,
            contents: '',
            success: false,
            successMessages: '',
            hideDetails: true,
        }
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        },
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
            if (this.$refs) {
                this.$store.dispatch('posts/addComment', {
                    id: Date.now(),
                    postId: this.postId,
                    content: this.content,
                    User: {
                        nickname: this.me.nickname,
                    }
                })
                .then(() => {
                    this.content = '';
                    this.success = true;
                    this.successMessages = 'commented';
                    this.hideDetails = false;
                })
                .catch(() => {

                });
            }
        }
    },
}
</script>

<style scoped>

</style>