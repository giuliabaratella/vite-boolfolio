<template>
    <div>
<h1>Projects List</h1>
<ul>
    <li v-for="project in this.projects" :key="project.id">
        <router-link class="nav-link active" :to="{name: 'project', params:{ slug: project.slug }}">
            {{ project.title }}
        </router-link>
    
    </li>
</ul>
    </div>
</template>

<script>
import {store} from "../data/store";
import axios from "axios";

    export default {
        name:'AppProjects',
        data(){
            return{
                store,
                projects:[],
                currentPage: 1,
                lastPage:0
            };
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
        },
        mounted() {
            this.getAllProjects();

        }
    }
</script>

<style lang="scss" scoped>

</style>