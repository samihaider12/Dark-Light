<template>

  <v-toolbar density="compact" class="toolbar shadow" id="navbar">

    <v-toolbar-title>Light/Dark Theme</v-toolbar-title>
    <!-- START: Left side -->

    <v-spacer></v-spacer>
        <v-btn icon>
  <button @click="toggleTheme">
    <v-icon>{{ theme === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
  </button>

    </v-btn>
    
    <!-- Spacer pushes next elements to right -->
    <router-link to="/" class="mx-2 toolbar text-decoration-none">Home</router-link>
    <router-link to="/Detail" class="mx-2 toolbar text-decoration-none">Details</router-link>
  </v-toolbar>
   
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const theme = computed(() => store.getters.currentTheme)

const toggleTheme = () => {
  store.commit('toggleTheme')
}
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0px;
  z-index: 1000;
}
</style>