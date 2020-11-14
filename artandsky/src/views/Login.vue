<template>
<div class="background">

    
    <v-form class="login-form" justify-center>
            <span class="login-form__title">Log in to your account</span>
            <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="Email"
            class="text-input"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            prepend-icon="mdi-mail"
            ></v-text-field>
                <v-text-field
                    v-model="password"
                    :type = "showPassword ? 'text' : 'password'"
                    required
                    :error-messages="passwordErrors"
                    label="Password"
                    class="text-input"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                ></v-text-field>
          <span class='errorMsg'>{{errorMessage}}</span>

            <v-btn class="submit-btn" dark @click="submit">sign in</v-btn>
            <v-divider
                inset
            ></v-divider>
            <span class="login-form__info">New to our site? <router-link to = '/register'>Sign up</router-link></span>

        </v-form>
</div>
        
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email} from "vuelidate/lib/validators";

  export default {
    title: 'Login',
    mixins: [validationMixin],

    validations: {
    email: { required, email },
    password: { required },
    },
  data() {
      return {
        email: '',
        password: '',
        submitted : false,
        showPassword: false,
        errorMessage:''
      }
    },
    computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
    },
  methods: {
    async submit() {
      this.$v.$touch();
      if(this.$v.$invalid){
        return
      }
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push('/cabinet');
        })
        .catch(err => {
          console.log(err);
          this.errorMessage = 'Email or password is incorrect'
        });
    },
    cancel() {
      return this.$router.push('/login');
    }
  }
  }
</script>

<style lang="scss">

.login-form{
    margin: 10vh auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    width:40%;
    padding: 1rem;
    border-radius: 1%;
    background-color: white;
}
.submit-btn{
    margin: 1rem;
}
@media screen and (max-width: 800px) {
  .login-form{
    width:90%;
}
.text-input{
    width:100%;
}
.login-form__title{
    font-size: 1rem;
}
  
}
@media screen and (min-width:800px) and (max-width:2000px) {
  .login-form{
    width:40%;
}
  .text-input{
      width: 80%;
  }
.login-form__title{
    font-size: 1.5rem;
}
  
}

.errorMsg{
  color: red;
}

</style>