<template>
  <div id="vue-frontend-app">
    <h2>Краткий системно-целостный толковый словарь по космопсихобиологии</h2>
    <router-link to="/">Глоссарий</router-link>
    <router-link to="/catalogue">Каталог</router-link>
    <router-link to="/profile">Профиль</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
