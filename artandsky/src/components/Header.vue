<template>
<v-app-bar app light fixed>
    <v-toolbar-title><router-link to = '/' class="header__link"><v-btn text >
      Art&Sky
    </v-btn></router-link></v-toolbar-title>
    <router-link to = '/docs' class="header__link"><v-btn  rounded>
      Docs
    </v-btn></router-link>
    <v-spacer></v-spacer>
    

    
    <router-link to = '/' class="header__link"><v-btn icon>
      <v-icon>mdi-home</v-icon>
    </v-btn></router-link>
    <router-link to = '/login' class="header__link"><v-btn icon>
      <v-icon>mdi-login</v-icon>
    </v-btn></router-link>
</v-app-bar>
        

</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.header__link{
    text-decoration: none;
}
</style>