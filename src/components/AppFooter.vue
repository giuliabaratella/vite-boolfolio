<template>
    <footer>
        <div class="py-5 container d-flex justify-content-between align-items-center">
            <div class="text-white">© Giulia Baratella 2023</div>
            <div class="d-flex column-gap-3">
                <a href="#" @click.prevent class="social-icon d-flex align-items-center justify-content-center" v-for="icon in store.socialLink">
                    <i class="fa-brands" :class="icon.icon"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import {store} from "../data/store";

    export default {
        name: 'AppFooter',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

footer{
    font-size: 1.7em;
    background-color: $color-tertiary;
    .social-icon{
    width: 50px;
    height: 50px;
    color: $color-white;
    background-color: $color-primary;
    border-radius: 50%;
    }   

}

</style>