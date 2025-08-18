<template>
<div class="footBar" >
        <v-footer  
        :class="'theme-' + theme"
        class=" ga-2 flex-wrap flex-grow-1 mt-2 toolbar shadow" border>
        <div class=" mt-1">
            <strong>@ copyright —2025 Light/Dark Theme — Vuetify</strong>  
        </div>
    </v-footer >
</div>
</template>
<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const theme = computed(() => store.getters.currentTheme)
</script>
 
<style scoped>
 .footBar{
     position: relative;
    bottom: -38px;
 }
</style>
