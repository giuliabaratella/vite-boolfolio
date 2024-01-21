<template>
 <test/>
<!-- <ul>
  <li v-for="(category,id) in this.categories" :key="id">
    {{ category.name }}
  </li>
  <li v-for="(technology,id) in this.technologies" :key="id">
    {{ technology.name }}
  </li>
</ul>  -->

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
      axios.get(store.apiUrl + "/projects", {params:{page: this.currentPage}}).then((resp)=>{
        console.log(resp.data);
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
      })
    },
    getAllCategories(){
      axios.get(store.apiUrl + "/categories").then((resp)=>{
        console.log(resp.data);
        this.categories = resp.data.results;
      })
    },
    getAllTechnologies(){
      axios.get(store.apiUrl + "/technologies").then((resp)=>{
        console.log(resp.data);
        this.technologies = resp.data.results;
      })
    },
  },
  mounted() {
    this.getAllProjects();
    this.getAllCategories();
    this.getAllTechnologies();
  }
  }
</script>

<style lang="scss" scoped>

</style>