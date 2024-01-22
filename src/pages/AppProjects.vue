<template>
    <div>
        <main class="container">
            <h1>Projects List</h1>

                <div v-for="project in projects" :key="project.id" class="d-flex flex-column flex-lg-row mb-5">

                    <ProjectCard :project="project"/>

                    <div class="px-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae perferendis reiciendis, provident laboriosam eius, reprehenderit magni sunt unde veritatis tempore doloremque ducimus quaerat quidem incidunt, ab soluta animi sit quia similique voluptatibus iste nisi temporibus ea! Cumque quod amet saepe asperiores, illum dolores quo nemo! Fugiat, adipisci nihil explicabo omnis alias impedit cupiditate tenetur quibusdam dicta iure in numquam quae sequi nesciunt asperiores, quod harum vero. Exercitationem voluptatem doloribus sed unde harum, sit reiciendis ut excepturi minus non facere! Culpa, vel ullam odio laborum voluptatem aspernatur voluptas, minima debitis dolores facilis commodi ad, aut maxime earum quia? Porro, nesciunt.
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