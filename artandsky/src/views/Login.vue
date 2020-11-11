<template>
<div class="background">

    
    <v-form class="login-form" justify-center>
            <span class="login-form__title">Log in to your account</span>
            <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            class="text-input"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            ></v-text-field>
                <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'md-visibility' : 'md-visibility_off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    class="text-input"
                    @click:append="show1 = !show1"
                ></v-text-field>
            <v-btn class="submit-btn" color="indigo" light @click="submit">sign in</v-btn>
            <v-divider
                inset
            ></v-divider>
            <span class="login-form__info">New to our site? <router-link to = '/'>Sign up</router-link></span>

        </v-form>
</div>
        
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    title: 'Login',
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        }
      }
    },

    data: () => ({
      show1: false,
      name: '',
      email: '',
      select: null,
      password: '',
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false,
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
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


</style>