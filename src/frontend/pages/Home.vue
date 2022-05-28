<template>
  <div class="hello">
    <Words/>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
import Words from 'frontend/components/Words.vue'

export default {
  name: 'Home',
  components: {
    Words
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js Frontend App +'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
