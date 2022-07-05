<template>
  <div class="hello">
    <CatalogueComponent/>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
import CatalogueComponent from '@/frontend/components/CatalogueComponent.vue'

export default {
  name: 'Catalogue',
  components: {
    CatalogueComponent
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
