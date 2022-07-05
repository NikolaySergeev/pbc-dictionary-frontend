<template>
  <div class="hello">
    <GlossaryComponent/>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
import GlossaryComponent from '@/frontend/components/GlossaryComponent.vue'

export default {
  name: 'Glossary',
  components: {
    GlossaryComponent
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
