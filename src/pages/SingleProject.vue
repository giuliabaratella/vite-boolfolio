<template>
    <div>
<h1>Single Project</h1>
<div>{{ project.title }}</div>
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
                project:{},
            }
        },
        methods:{
            getProjectData(){
                axios.get(`${this.store.apiUrl}/projects/${this.$route.params.slug}`).then((resp)=>{
        console.log(resp.data);
        this.project = resp.data.results;
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