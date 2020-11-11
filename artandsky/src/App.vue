<template>
<div>
  
  <v-app id="inspire">

    <Header/>
      
    <div class="main-content">
      <transition name="fade" mode="out-in">
      <router-view></router-view>
      </transition>
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
  width:100vw;
  margin: 5rem auto 0 auto;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
