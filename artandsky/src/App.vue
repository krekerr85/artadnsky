<template>
<div>
  
  <v-app id="inspire">

    <Header/>
      
    <v-main class="main-content">

      <router-view/>
    </v-main>
     
    <Footer/>

  </v-app>
 
</div>
</template>



<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.main-content{
  width:50vw;
  margin: 5rem auto;
}
</style>
