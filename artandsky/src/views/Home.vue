<template>
  <div v-if="!busy">
  <div class="posts" v-for="post in posts" :key="post.text">
    
    <span class="posts__title">{{post.title}}</span><br/>
    <span  class="posts__author">{{post.author}}</span> <span class="post__date">{{getDate(post.createdAt)}}</span>
    <hr/>
    <div class="posts__text">{{post.text}}</div><br/>
    <v-btn class="posts__btn" v-if="isAdmin" @click="deletePost(post._id)">Удалить</v-btn>
  </div>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
import moment from 'moment'
import axios from "axios";
export default {
  title: 'Home',
  async created() {
    this.busy = true
    await this.loadCurrentUser()
    await this.loadPosts()
    this.busy = false

  },
  data() {
    return {
      
      busy: true,
      posts: ''

    };
  },
  computed: {
    ...mapGetters([
            'isLoggedIn'
        ]),
        currentUser(){
            return this.$store.getters.currentUser
        },
        isAdmin(){
            return this.$store.getters.isAdmin
        },
        
  },
  methods: {
    async loadPosts(){
      
    const response = await this.$store.dispatch('fetchServer',['loadPosts'])
    this.posts = response.data.data
    console.log(this.posts)
    },
    async loadCurrentUser(){
        await this.$store.dispatch('loadCurrentUser')
    },
    async deletePost(id){
      await axios.delete(`/api/post/${id}`);
      this.loadPosts()
    },
    getDate(date){
      const m = moment(date)
      return m.fromNow()
    }
  }
};
</script>

<style lang='scss'>
.js-image{
    float:left;
    margin: 10px 10px 7px 0;
}

@media screen and (max-width: 600px) {
  .js-img{
    width: 170px;
}
}
@media screen and (min-width:600px) and (max-width:2000px) {
  .js-img{
    width: 250px;
}
.posts{

  &__text{
    font-size: 24px;
    padding: 5px;
    margin: 5px;
  }
  &__title{
    font-size: 30px;
  }
  &__author{
    text-decoration: underline;
  }
  &__btn{
    margin: 0 auto;
  }
}
}
</style>