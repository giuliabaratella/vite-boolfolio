<template>
   <section id="about">
    <div class="container">
        <h2 class="mb-3">About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi eveniet, adipisci aperiam molestiae facilis magni aliquid enim eaque placeat eius sapiente id numquam ipsam nemo error dicta exercitationem iure quod unde temporibus delectus omnis praesentium.<span class="highlight"> Enim quia consectetur unde sunt, inventore, nesciunt eligendi tenetur nobis voluptatum necessitatibus earum ab. </span>Voluptates, commodi beatae voluptas ipsum quas dolore recusandae placeat animi, perspiciatis voluptatum quidem provident esse laudantium ab ullam tempora, adipisci mollitia rem possimus! Ducimus ipsum iure totam! Explicabo accusamus excepturi vero facilis saepe nobis necessitatibus similique quae quas, fuga maxime totam tenetur fugiat voluptates perspiciatis, amet quidem! Placeat, natus doloremque.</p>
    </div>
   </section>
</template>

<script>
    export default {
        name:'AboutComponent',
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
#about{
    background-color: $color-light;
    h2{
        color: $color-primary;
    }
    .highlight{
        color: $color-secondary;
    }
}
</style>