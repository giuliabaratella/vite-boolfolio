<template>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid d-flex justify-content-between ">
    <div id="logo">GB Web Developer</div>
    <div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"  v-for="(item, index) in menu" :key="index">
              <router-link class="nav-link" active-class="active" :to="{name: item.name}">
                {{item.label}}
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name:'AppHeader',
        data(){
            return{
                menu:[
                    {
                        label:"About",
                        name:"about",

                    },
                    {
                        label:"Projects",
                        name:"projects",

                    },
                    {
                        label:"Contacts",
                        name:"contacts",

                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>