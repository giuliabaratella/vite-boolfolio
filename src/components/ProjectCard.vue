<template>
    <div class="card">
            <img class="card-img-top" :src="`${store.imgPath}${project.image}`" :alt="project.title">
            <div class="card-body">
                <div class="text-center">
                {{ project.title }}
                </div>
            </div>
    </div>
</template>

<script>
import {store} from "../data/store";

    export default {
        name: 'ProjectCard',
        props:['project'],
        data(){
            return{
                store
            }
        }

    }
</script>

<style lang="scss" scoped>
.card{
    padding-left: 0;
    padding-right: 0;
}
</style>