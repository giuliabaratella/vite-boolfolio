<template>
<div v-if="project">

    <main class="container">

        <div class="d-flex align-items-center justify-content-between py-3">
            <h1 class="me-3">{{ project.title }}</h1>
            <div class="category bg-warning">{{ project.category.name }}</div>
        </div>

        <div class="w-100 mb-3">
            <img :src="store.imgPath + project.image" :alt="project.title">
        </div>

        <div v-if="project.technologies" class="d-flex column-gap-3 mb-3 align-items-baseline ">
            <h3 class="me-3">Technologies:</h3>
            <div v-for="technology in project.technologies" class="icon d-flex align-items-center justify-content-center">
                <i class="fa-brands" :class="getIcons(technology.slug)"></i>
            </div>
        </div>

        <p>{{ project.description }}</p>
        <!-- <button class="btn btn-primary" >
            <router-link :to="{name: 'project', params:{ slug: 'boolflix'}}" class="text-white">
                <span class="me-2">Next Project</span>
                    <i class="fa-solid fa-arrow-right"></i>
            </router-link>
        </button> -->

    </main>
    

</div>
</template>

<script>
import axios from "axios";
import {store} from "../data/store";
    export default {
        name:'SingleProject',
        data(){
            return{
                store,
                project:null,
            }
        },
        methods:{

            getProjectData(){
                axios.get(`${this.store.apiUrl}${this.store.endpoints.projects}/${this.$route.params.slug}`).then((resp)=>{
                console.log(resp.data);
                if(resp.data.results){
                    this.project = resp.data.results;

                }else{
                    this.$router.push({name: 'not-found'});
                }
            })
         },
         getIcons(el){
            for(let i = 0 ; i < this.store.codeSkills.length; i++){
                if(this.store.codeSkills[i].name == el){
                    return this.store.codeSkills[i].icon;
                }
            }
         }
        },
        mounted(){
            this.getProjectData();

            // this.$watch(() => this.$route.params, (toParams, previousParams) => {
            //     if(toParams !== previousParams){
            //         this.getProjectData();
            //     }
            // });
        },
        
             
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

main{
    margin-top: 150px;

    .category{
    border-radius: 20px;
    padding: 0 10px;
}
.tech-badge{
    // height: 50px;
    // width: 50px;
    border-radius: 30px;

    padding: 15px 15px;
}
.icon{
    font-size: 2em;
    width: 50px;
    height: 50px;
    color: $color-white;
    background-color: $color-secondary;
    border-radius: 50% 0 50% 0;
    &:nth-child(4n){
    background-color: $color-tertiary;
    }
    &:nth-child(4n-1){
    background-color: $color-accent;
    }
    &:nth-child(4n+1){
    background-color: $color-primary;
    }
    &:hover{
        transform: scale(1.1);
    }
    }
}

</style>