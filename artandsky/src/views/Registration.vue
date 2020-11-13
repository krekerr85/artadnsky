<template>
<div>

    
    <v-form @submit.prevent="handleSubmit" class="login-form" justify-center>
            <span class="login-form__title">Sign up</span>
            <v-text-field
    v-model="email"
    :error-messages="emailErrors"
    label="Email"
    class="text-input"
    required
    @input="$v.email.$touch()"
    @blur="$v.email.$touch()"
    prepend-icon="mdi-mail"
/>
                <v-text-field
    v-model="password"
    :type="showPassword ? 'text' : 'password'"
    :error-messages="passwordErrors"
    label="Password"
    class="text-input"
    required
    @input="$v.password.$touch()"
    @blur="$v.password.$touch()"
    prepend-icon="mdi-lock"
    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="showPassword = !showPassword"
/>
                <v-text-field
    v-model="confirmPassword"
    :type="showPassword ? 'text' : 'password'"
    :error-messages="confirmPasswordErrors"
    label="Password"
    required
    class="text-input"
    @input="$v.confirmPassword.$touch()"
    @blur="$v.confirmPassword.$touch()"
    prepend-icon="mdi-lock"
    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="showPassword = !showPassword"
/>
            <span class="errorMsg">{{errorMessage}}</span>

            <v-btn class="submit-btn" color="indigo" light @click="handleSubmit" >sign up</v-btn>
            <v-divider
                inset
            ></v-divider>
            <span class="login-form__info">Already have an account?<router-link to = '/login'> Sign in</router-link></span>

        </v-form>
</div>
        
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  title: 'Sign up',
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { sameAsPassword: sameAs("password") }
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      status: null,
      isAdmin: null,
      showPassword: false,
      errorMessage: ''
    };
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
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAsPassword && errors.push("Password must be same");
      return errors;
    }
    },
    methods: {
    async handleSubmit() {
      this.$v.$touch();
      if(this.$v.$invalid){
        console.log(this.$v.$invalid)
        return
      }
      this.$store
        .dispatch("register", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push('/cabinet');
        })
        .catch(err => {
          console.log(err);
          this.errorMessage = 'Email is already taken'
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
    margin: 8vh auto;
    display:flex;
    flex-direction: column;
    align-items: center;
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
  
}
@media screen and (min-width:800px) and (max-width:2000px) {
  .login-form{
    width:40%;
}
  .text-input{
      width: 80%;
  }
  
}
.login-form__title{
    font-size: 1.5rem;
}
.errorMsg{
  color: red;
}
</style>