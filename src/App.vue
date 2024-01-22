<template>

<router-view></router-view>

 
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
        technologies:[],
        categories:[],
        currentPage: 1,
        lastPage:0
      }
    },
    methods:{
    getAllProjects(){
      axios.get(store.apiUrl + this.store.endpoints.projects, {params:{page: this.currentPage}}).then((resp)=>{
        console.log(resp.data);
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
      })
    },
    getAllCategories(){
      axios.get(store.apiUrl + this.store.endpoints.categories).then((resp)=>{
        console.log(resp.data);
        this.categories = resp.data.results;
      })
    },
    getAllTechnologies(){
      axios.get(store.apiUrl + this.store.endpoints.technologies).then((resp)=>{
        console.log(resp.data);
        this.technologies = resp.data.results;
      })
    },
  },
  mounted() {
    // this.getAllProjects();
    // this.getAllCategories();
    // this.getAllTechnologies();
  }
  }
</script>

<style lang="scss" scoped>

</style>