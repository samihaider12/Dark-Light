<script setup>
 import Navbar from './components/Navbar.vue';
 import Footer from './components/Footer.vue';


 import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const theme = computed(() => store.getters.currentTheme)
</script>

<template>
  <div :class="'theme-' + theme"> 
  <Navbar :class="'theme-' + theme" />
    <router-view  />
  <Footer />
  </div>
</template>

<style scoped>
 
</style>
