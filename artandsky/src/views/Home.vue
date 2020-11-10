<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="handleButton">Post</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from 'axios';
export default {
  data(){
    return {
      list: [],
      errors: []
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    handleButton(){
      axios.post(`/hello`)
      .then(response => {
      // JSON responses are automatically parsed.
      this.list.push(response.data)
      this.printToConsole();
    })
    .catch(e => {
      this.errors.push(e)
    })
    },
    printToConsole(){
      console.log(this.list);
    }
  }
};
</script>
