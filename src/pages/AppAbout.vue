<template>
<HeroComponent/>
<AboutComponent/>
<SkillsComponent/>
<ProjectsCarousel/>
</template>

<script>
import {store} from "../data/store";
import axios from "axios";
import ProjectsCarousel from '@/components/ProjectsCarousel.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import SkillsComponent from '@/components/SkillsComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
    export default {
        name:'AppAbout',
        components:{
            ProjectsCarousel,
            AboutComponent,
            SkillsComponent,
            HeroComponent,
        },
        data(){
            return{
                store,
                projects:[],
            };
        }, 
        methods:{
            getAllProjects(){
            axios.get(store.apiUrl + this.store.endpoints.projects, {params:{page: this.currentPage}}).then((resp)=>{
                console.log(resp.data);
                this.projects = resp.data.results.data;
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