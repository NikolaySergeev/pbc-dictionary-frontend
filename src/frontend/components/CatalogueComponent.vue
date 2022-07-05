<template>
    <div>
      <h3>Каталог</h3>
      <span>{{ msg }}</span>
      <BootstrapTable
        ref="table"
        :columns="columns"
        :data="termsList"
        :options="options"
        @on-post-body="vueFormatterPostBody"
      />
    </div>
</template>

<script>
import axios from 'axios';
//import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js'
import tableMixin from '../mixins/table'

export default {
  name: 'CatalogueComponent',
  mixins: [tableMixin],
  data () {
    return {
      msg: 'This is words list!',
      termsList: [],
      columns: [
        {
          field: 'term_id',
          title: 'ID',
          sortable: true
        },
        {
          field: 'title',
          title: 'Слово',
          sortable: true
        },
        {
          field: 'actions',
          title: 'Действия',
          align: 'center',
          formatter: (value, row) => {
            return this.vueFormatter({
              template: '<div><b-button @click="viewTerm(row)">View</b-button><b-button @click="editTerm(row)">Edit</b-button><b-button @click="deleteTerm(row)">Delete</b-button></div>',
              data: { row },
              methods: {
                viewTerm: this.viewTerm,
                editTerm: this.editTerm,
                deleteTerm: this.deleteTerm
              },
            })
          }
        }
      ],
      options: {
        search: true,
        showColumns: true,
        showExport: true,
        detailView: true,
        onExpandRow: function (index, row, $detail) {
          console.log(row);
          //this.buildDefinitionSubTable($detail.html('<table></table>').find('table'), row)
          $detail.html('<table></table>').find('table').bootstrapTable({
            clickToSelect: true,
            columns: [{
              field: 'id',
              title: 'ID',
              sortable: true
            }, {
              field: 'content',
              title: 'Определение',
              sortable: true
            }, {
              field: 'created_at',
              title: 'Дата добавления',
              sortable: true
            }, {
              field: 'actions',
              title: 'Действия',
              align: 'center',
              formatter: (value, row) => {
                return this.vueFormatter({
                  template: '<div><b-button @click="viewTerm(row)">View</b-button><b-button @click="editTerm(row)">Edit</b-button><b-button @click="deleteTerm(row)">Delete</b-button></div>',
                  data: { row },
                  methods: {
                    viewTerm: this.viewTerm,
                    editTerm: this.editTerm,
                    deleteTerm: this.deleteTerm
                  },
                })
              }

            }],
            data: this.termsList[2].definitions,
          });
        }
      }
    }
  },
  methods: {
    viewTerm (row) {
      alert(JSON.stringify(row))
    },
    editTerm (row) {
      alert(JSON.stringify(row))
    },
    deleteTerm (row) {
      alert(JSON.stringify(row))
    }
  },
  mounted() {
//    axios.get( process.env.VUE_APP_API_URL + 'terms/' ) 
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
        this.termsList = response.data
        this.termsList.forEach(function(entry, index) {
          console.log(entry.title);
          axios.get(`https://dictionarypy.herokuapp.com/defs?term=${entry.title}`)
          .then(response => {
            entry.definitions = response.data;
          })
          .catch(err => {
            console.log(err)
          })
        });
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
      console.log(this.termsList)
  },
}
</script>

<style scoped>

</style>
