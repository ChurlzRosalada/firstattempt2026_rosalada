<template>
  <div class="app-shell">
    <!-- Sidebar (hidden on auth pages) -->
    <SideNav v-if="showNav" />

    <!-- Main content area -->
    <div class="main-area" :style="showNav ? 'margin-left: var(--sidebar-w)' : ''">
      <!-- Top bar (hidden on auth pages) -->
      <TopBar v-if="showNav" />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SideNav from './components/SideNav.vue'
import TopBar from './components/TopBar.vue'

const route = useRoute()
const noNavRoutes = ['/login', '/forgot-password', '/register']
const showNav = computed(() => !noNavRoutes.some(r => route.path.startsWith(r)))
</script>
