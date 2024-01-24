<template>
    <main class="container">
        <h1 class="mb-3">Contact me</h1>
        <ContactForm/>


    </main>
</template>

<script>
 import ContactForm from '../components/ContactForm.vue';
    export default {
       
        name: 'AppContacts',
        components:{
            ContactForm,
        }
    }
</script>

<style lang="scss" scoped>
main{
    margin-top: 150px;


}
</style>