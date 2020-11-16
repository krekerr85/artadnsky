<template>
    <div v-if="!busy">
        <v-form class="post-form" justify-center>
            <span class="login-form__title">Создать новый пост</span>
            <v-text-field
            v-model="postTitle"
            label="Тема"
            class="text-input"
            required
            :error-messages="titleErrors"
            @input="$v.postTitle.$touch()"
            @blur="$v.postTitle.$touch()"
            ></v-text-field>
                <v-textarea
                    v-model="postText"
                    required
                    label="Новый пост"
                    class="text-input"
                    :error-messages="textErrors"
                    @input="$v.postText.$touch()"
                    @blur="$v.postText.$touch()"
                ></v-textarea>

            <v-btn class="submit-btn" dark @click="createPost">Добавить пост</v-btn>
  

        </v-form>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength} from "vuelidate/lib/validators";
import { mapGetters} from "vuex";
export default {
    created() {
        this.loadCurrentUser()

    },
    title: 'Admin',
    mixins: [validationMixin],
    validations: {
    postTitle: { required, minLength: minLength(6) },
    postText: { required, minLength: minLength(10) }
  },
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
        titleErrors() {
        const errors = [];
        if (!this.$v.postTitle.$dirty) return errors;
        !this.$v.postTitle.required && errors.push("Title is required");
        !this.$v.postTitle.required && errors.push("Title is required");
        return errors;
    },
        textErrors() {
        const errors = [];
        if (!this.$v.postText.$dirty) return errors;
        !this.$v.postText.minLength &&
            errors.push("Text must be at least 10 characters long");
        !this.$v.postText.required && errors.push("Text is required");
        return errors;
    },
    },
    methods: {
        async loadCurrentUser(){
                this.busy = true
                await this.$store.dispatch('loadCurrentUser')
                this.busy = false
            

        },
        async createPost(){
            this.$v.$touch();
            if(this.$v.$invalid){
                console.log(this.$v.$invalid)
                return
            }
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