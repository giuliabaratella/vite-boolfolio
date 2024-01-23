<template>
    <div>
        <main class="container">
            <h1>Projects List</h1>
            <select class="form-select mb-5" aria-label="Category filter" v-model="selectedCategory" @change="filterProjects()">
                <option selected value="all">Choose a category</option>
                <option v-for="category in store.categories" :value="category.id">{{ category.name }}</option>
            </select>
            
                <div v-for="project in store.projects" :key="project.id" class="row align-content-center align-items-center mb-5">

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


                <nav aria-label="Page navigation" class="d-flex justify-content-center" v-if="selectedCategory == 'all' ">
                    <ul class="pagination">
                    <li class="page-item" :class="{disabled : currentPage === 1}">
                        <button class="page-link" @click="getAllProjects(currentPage - 1)">Previous</button>
                    </li>
                    <li v-for="n in lastPage" class="page-item">
                        <button class="page-link" @click="getAllProjects(n)">{{ n }}</button>
                    </li>
                    <li class="page-item" :class="{disabled : currentPage === lastPage}">
                        <button class="page-link" @click="getAllProjects(currentPage + 1)">Next</button>
                    </li>
                    </ul>
                </nav>

                
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
                currentPage: 1,
                lastPage:0,
                selectedCategory:'all',
            };
        }, 
        methods:{
            getAllProjects(pageNum){
            axios.get(store.apiUrl + this.store.endpoints.projects, {params:{page: pageNum}}).then((resp)=>{
                console.log(resp.data);
                this.store.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                })
            },
            getAllCategories(){

                axios.get(store.apiUrl + this.store.endpoints.categories).then((resp)=>{
                console.log(resp.data);
                this.store.categories = resp.data.results;
                })
            },
            filterProjects(){
                if(this.selectedCategory == "all"){
                    this.getAllProjects(this.currentPage);
                }else{
                    // console.log(this.selectedCategory);
                    axios.get(store.apiUrl + this.store.endpoints.projects, {params:{category: this.selectedCategory}}).then((resp)=>{
                    this.store.projects = resp.data.results;
                    })
                }
            }
                
               

        },
        mounted() {
            this.filterProjects();
            this.getAllCategories();

        }
    }
</script>

<style lang="scss" scoped>
main{
    margin-top: 150px;


}
</style>