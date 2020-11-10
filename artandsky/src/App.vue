<template>
<div>
  
  <v-app id="inspire">

    <Header/>
      
    <div class="main-content">

      <router-view/>
    </div>
     
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
  padding: 0;
  flex: 1 1 auto;
}
p{
  font-family: 'Ubuntu', sans-serif;
}
#inspire{
  display: flex;
  flex-direction: column;

}
</style>
