<template>
  <div id="app">

   <the-header />
    <the-about />
    <the-services />
    <the-works />
    <our-team />
    <the-contact />
    
  </div>
</template>

<script>

import TheHeader from './components/TheHeader/TheHeader.vue'
import TheAbout from './components/TheMain/TheAbout.vue'
import TheServices from './components/TheMain/TheServices.vue'
import TheWorks from './components/TheMain/TheWorks.vue'
import OurTeam from './components/TheMain/OurTeam.vue'
import TheContact from './components/TheMain/TheContact.vue'
export default {
  name: 'App',
  components: {
      TheHeader,
      TheAbout,
      TheServices,
      TheWorks,
      OurTeam,
      TheContact
    }
}
</script>

<style lang="scss">
  .app {
    //min-height: 100vh;
    //display: flex;
  }

</style>
