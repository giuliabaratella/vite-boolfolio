<template>
 <test/>


</template>

<script>
import axios from "axios";

import {store} from "./data/store";
import test from './components/TestComponent.vue';
  export default {
    components:{
      test,
    },
    data(){
      return{
        store,
        projects:[],
      }
    },
    methods:{
    getAllProjects(){
      axios.get(store.apiUrl + "/projects", {params:{page: this.currentPage}}).then((resp)=>{
        console.log(resp.data);
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
      })
    },
  },
  mounted() {
    this.getAllProjects();
  }
  }
</script>

<style lang="scss" scoped>

</style>