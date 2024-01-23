<template>
    <div id="hero">
        <div class="yellow-box"></div>
        <div class="container">
            <div class="orange-box d-none d-xl-block"></div>
            <div class="img-box">
                <img src="../assets/images//pro-pic-sample.jpg" alt="profile-pic-sample">
            </div>
            <div id="hero-text">
                <h1 class="mb-5">I'M <span class="name">Giulia</span><br>
                    Full Stack <br>
                    Web Developer
                </h1>
                <button class="btn fw-bold">
                    <router-link :to="{name: 'contacts'}">
                        Contact me
                    </router-link>
                </button>
            </div>
            <div id="social-icons" class="d-flex flex-column row-gap-3">
                    <a href="#" @click.prevent class="icon d-flex align-items-center justify-content-center" v-for="icon in store.socialLink">
                        <i class="fa-brands" :class="icon.icon"></i>
                    </a>
                </div>
        </div>
    </div>
</template>

<script>
    import {store} from "../data/store";

    export default {
        name:'HeroComponent',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
#hero{
    height: 900px;
    position: relative;

    .yellow-box{
        z-index: 1;
        position: absolute;
        right: 0;
        top: 0;
        width: 60%;
        height: 800px;
        background-color: $color-tertiary;
        border-radius: 0 0 0 500px;
    }
    
    .container{
        position: relative;
        height: 100%;

        .orange-box{
        z-index: 100;
        position: absolute;
        right: -175px;
        bottom: 100px;
        width: 400px;
        height: 550px;
        background-color: $color-secondary;
        border-radius: 500px 500px 0 0;
    }
        .img-box{
        position: absolute;
        top: 120px;
        right: 10%;
        z-index: 500;
        width: 550px;
        height: 550px;
        background-color: $color-white;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
        object-position: center;
        img{
            transform: translate(0, 35px);
        }
        }
        #hero-text{
        z-index: 1000;
        position: absolute;
        bottom: 150px;
        left: 0;
        h1{
            font-size: 3em;
            .name{
            color: $color-secondary;
            font-style: italic;
            font-weight: bold;
            font-size: 2em;
        }
        }
        

            .btn{
                color: $color-primary;
                font-size: 1.5em;
                border: 5px solid $color-primary;
            }
            
        }
        #social-icons{
            z-index: 1000;
            position: absolute;
            right: 0;
            bottom: 150px;
            .icon{
        font-size: 2.4em;

            width: 70px;
            height: 70px;
            color: $color-white;
            background-color: $color-primary;
            border-radius: 50%;
            }   
        }
    }


}
</style>