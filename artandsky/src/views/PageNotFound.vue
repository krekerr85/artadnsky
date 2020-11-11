<template>
    <div class="page-not-found">
        <img class="page-not-found__image" src="../assets/404.svg"/>
        <h1 class="page-not-found__number">404</h1>
        <div class="page-not-found__text">Page not found</div>
    </div>
</template>

<script>
export default {
  title: 'Page Not Found',
  name: 'PageNotFound',

}
</script>
<style>

.page-not-found{
    display:flex;
    justify-content: center;
    align-items: center;
}
.page-not-found__number{
    font-size: 150px;
    color: indigo;
    padding: 1rem;
}
.page-not-found__text{
    font-size: 50px;
}
</style>