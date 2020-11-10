<template>
<v-app-bar app light fixed>
    <v-toolbar-title>Art&Sky</v-toolbar-title>
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

</style>