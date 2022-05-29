<template>
    <div>
        <h1>Words</h1>
        <span>{{ msg }}</span>
        <ul id="termsListId">
          <li v-for="item in termsList" :key="item.title">
            {{ item.title }}
          </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Words',
  data () {
    return {
      msg: 'This is words list!',
      termsList: [],
    }
  },
  mounted() {
    axios.get('https://dictionarypy.herokuapp.com/terms/')
/*
      const getURL = 'https://dictionarypy.herokuapp.com/terms/';
      const getInit = {
	method: 'GET',
	mode: 'no-cors',
      };
      const myRequest = new Request(getURL, getInit);
      fetch(myRequest)
*/
      .then(response => { 
        this.termsList = response
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>

<style scoped>

</style>
