<template>
<div v-if="project">
<h1>{{ project.title }}</h1>
<div class="w-50">
    <img :src="store.imgPath + project.image" :alt="project.title">

</div>
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
         }
        },
        mounted(){
            this.getProjectData();
        }
    }
</script>

<style lang="scss" scoped>

</style>