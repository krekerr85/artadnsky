<template>
  <div>
      <h1>An Introduction to JavaScript</h1>
      <div class="js-image"><img class="js-img" src="../assets/java-script.jpg"/></div>
<p>Let’s see what’s so special about JavaScript, what we can achieve with it, and what other technologies play well with it.</p>

<h2>What is JavaScript?</h2>
<p>JavaScript was initially created to “make web pages alive”.</p>

<p>The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.</p>

<p>Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.</p>

<p>In this aspect, JavaScript is very different from another language called Java.</p>
<h2>Why is it called JavaScript?</h2>
<p>When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.</p>

<p>But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  title: 'Home',
  data() {
    return {

    };
  },
  methods: {
  }
};
</script>

<style >
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
  
}
</style>