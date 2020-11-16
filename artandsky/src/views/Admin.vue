<template>
    <div v-if="!busy">
        <v-form class="post-form" justify-center>
            <span class="login-form__title">Создать новый пост</span>
            <v-text-field
            v-model="postTitle"
            label="Тема"
            class="text-input"
            required

            ></v-text-field>
                <v-textarea
                    v-model="postText"
                    required
                    label="Новый пост"
                    class="text-input"
                ></v-textarea>

            <v-btn class="submit-btn" dark @click="createPost">Добавить пост</v-btn>
  

        </v-form>
    </div>
</template>

<script>

import { mapGetters} from "vuex";
export default {
    created() {
        this.loadCurrentUser()

    },
    title: 'Admin',
    data(){
        return {
            busy: true,
            postTitle: '',
            postText: ''
        }
    },
    computed: {
        ...mapGetters([
            'isLoggedIn'
        ]),
        currentUser(){
            return this.$store.getters.currentUser
        },
    },
    methods: {
        async loadCurrentUser(){
                this.busy = true
                await this.$store.dispatch('loadCurrentUser')
                this.busy = false
            

        },
        async createPost(){
            await this.$store
            .dispatch("fetchServer",['createPost', {
            author: this.currentUser,
            title: this.postTitle,
            text: this.postText,
            isModerated: true}])
            this.postTitle = ''
            this.postText = ''
        }
       
    }

}
</script>