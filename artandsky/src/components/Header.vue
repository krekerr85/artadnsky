<template>
<v-app-bar app dark fixed>
    <v-toolbar-title><router-link to = '/' class="header__link">
      <span  class="title__link">Art&Sky</span>
    </router-link></v-toolbar-title>

    <router-link class='header__link' to = '/docs'>
      <span  class="link">Docs</span>
    </router-link>

      <router-link class='header__link' to = '/cabinet' v-if="isLoggedIn">
      <span  class="link">Cabinet</span>
    </router-link>

    
    <v-spacer></v-spacer>
    

    <div class='auth__links' v-if="isLoggedIn">
      <v-btn @click="logout">Log out</v-btn>
    </div>
    <div class='auth__links' v-else>
      <router-link class='header__link' to = '/login' >
      <span  class="link">Sign in</span>
      </router-link>
      <router-link class='header__link' to = '/register' >
      <span  class="link">Sign up</span>
      </router-link>
    </div>
</v-app-bar>
        

</template>

<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return {
            items: [
      { title: 'Home',
        link: '/' },
      { title: 'Sign in',
        link: '/login' },
        { title: 'Sign up',
        link: '/register' },
    ]
        }
    },
    computed: {
      ...mapGetters([
        'isLoggedIn'
      ]),
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
        
      }
    }
}
</script>

<style lang="scss">
.header__link{
    text-decoration: none;
}
.link {
  padding-left: 10px;
  color: white;
  font-size: 18px;
}
.title__link{
  text-decoration: none;
  font-size: 25px;
  color: white;
}
</style>