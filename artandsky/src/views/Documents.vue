<template>
<div>
    <h1>Javascript for beginers</h1>
    <div class="js-image"><img class="js-img" src="../assets/js.png"/></div>
    <p>JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>

<p>Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[8] JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior,[9] and all major web browsers have a dedicated JavaScript engine to execute it.</p>

<p>As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). However, the language itself does not include any input/output (I/O), such as networking, storage, or graphics facilities, as the host environment (usually a web browser) provides those APIs.</p>

<p>JavaScript engines were originally used only in web browsers, but they are now embedded in some servers, usually via Node.js. They are also embedded in a variety of applications created with frameworks such as Electron and Cordova.</p>

<p>Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.</p>
</div>
</template>

<script>
 
export default {
    title: 'Docs',
}
</script>
<style lang="scss">

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