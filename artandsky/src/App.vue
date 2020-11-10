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
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
.main-content{
  width:70vw;
  margin: 5rem auto;
}
p{
  font-family: 'Ubuntu', sans-serif;
}
</style>
