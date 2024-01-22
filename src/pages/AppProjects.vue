<template>
    <div>
        <main class="container">
            <h1>Projects List</h1>

                <div v-for="project in projects" :key="project.id" class="row align-content-center align-items-center mb-5">

                    <ProjectCard :project="project" class="col-12 col-lg-6"/>

                    <div class="col-12 col-lg-6">
                        <div class="px-5">
                            <p>{{ project.description }}</p>
                            <button class="btn btn-primary">
                                <router-link :to="{name: 'project', params:{ slug: project.slug }}" class="text-white">
                                    <span class="me-2">See more</span>
                                     <i class="fa-solid fa-arrow-right"></i>
                                </router-link>
                            </button>
                        </div>
                    </div>
                </div>
                
        </main>

    </div>
</template>

<script>
import {store} from "../data/store";
import axios from "axios";
import ProjectCard from '../components/ProjectCard.vue';

    export default {
        name:'AppProjects',
        components:{
            ProjectCard,
        },
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