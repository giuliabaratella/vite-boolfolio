<template>
    <section id="projects-carousel">
        <div class="container">
            <div class="mb-3">Carosello progetti</div>
            <div class="text-center">
                <button class="btn">
                    <router-link :to="{name: 'projects'}" class="text-white">
                        <span class="me-2">See all Projects</span>
                            <i class="fa-solid fa-arrow-right"></i>
                    </router-link>
                </button>
            </div>
        </div>
       
    </section>
</template>

<script>
    export default {
        name:'ProjectsCarousel',
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

#projects-carousel{
    
    background-color: $color-light-blue;
    .btn{
        background-color: $color-primary;
    }
}
</style>