<template>
    <section id="skills">
<div class="container">
    <h2 class="text-center mb-5">My Skills</h2>
    <div class="row justify-content-center mb-3">
        <h3 class="col-12 col-lg-2">Code</h3>
        <div class="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start  column-gap-3 icons">
            <div v-for="icon in store.codeSkills" class="icon d-flex align-items-center justify-content-center">
                <i class="fa-brands" :class="icon.icon"></i>
            </div>
        </div>
 
    </div>
    <div class="row justify-content-center mb-3">
        <h3 class="col-12 col-lg-2 ">Design</h3>
        <div class="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start  column-gap-3 icons">
            <div v-for="icon in store.designSkills" class="icon d-flex align-items-center justify-content-center">
                <img :src="icon.icon" :alt="icon.name">
            </div>
        </div>
 
    </div>
</div>
    </section>
</template>

<script>
import {store} from "../data/store";

    export default {
        name:'SkillsComponent',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
#skills{
    h2{
        color: $color-secondary;
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
    img{
        filter: invert(100%);
    }
    &:hover{
        transform: scale(1.1);
    }
    }
}
</style>