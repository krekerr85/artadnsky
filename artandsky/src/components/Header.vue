<template>
<v-app-bar app light fixed>
    <v-toolbar-title><router-link to = '/' class="header__link"><v-btn text >
      Art&Sky
    </v-btn></router-link></v-toolbar-title>
    <router-link to = '/docs' class="header__link"><v-btn  rounded>
      Docs
    </v-btn></router-link>
    <v-spacer></v-spacer>
    

    <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
            <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
           link
        >
          {{ item.title }}
        </v-list-item>
      </v-list>
      </v-menu>
</v-app-bar>
        

</template>

<script>
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
    ],
        }
    }
}
</script>

<style lang="scss">
.header__link{
    text-decoration: none;
}
</style>