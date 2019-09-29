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
            <input ref="imageInput" type="file" multiple hidden @change="onChangeImages">
            <v-btn type="button" @click="onClickImageUpload">upload image</v-btn>
            <div>
              <div v-for="(p, i) in imagePaths" :key="p" style="display: inline-block">
                <img :src="`http://localhost:3085/${p}`" alt="p" style="width: 200px">
                <div>
                  <button @click="onRemoveImage(i)" type="button">remove</button>
                </div>
              </div>
            </div>
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
        ...mapState('posts', ['imagePaths'])
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
                    content: this.content,
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
        },
        onClickImageUpload() {
          this.$refs.imageInput.click();
        },
        onChangeImages(e) {
          console.log(e.target.files);
          const imageFormData = new FormData();
          [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
          });
          this.$store.dispatch('posts/uploadImages', imageFormData);
        },
        onRemoveImage(index) {
          this.$store.commit('posts/removeImagePath', index);
        }
    },
};
</script>

<style scoped>

</style>