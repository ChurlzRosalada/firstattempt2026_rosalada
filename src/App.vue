<template>
  <div class="app-shell">
    <router-view />
    <BottomNav v-if="showNav" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BottomNav from './components/BottomNav.vue'

const route = useRoute()
const noNavRoutes = ['/login', '/forgot-password', '/register']
const showNav = computed(() => !noNavRoutes.some(r => route.path.startsWith(r)))
</script>
