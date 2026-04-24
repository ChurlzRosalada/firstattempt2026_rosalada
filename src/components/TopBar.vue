<template>
  <header class="topbar">
    <div class="topbar-title">
      <span>{{ pageTitle }}</span>
    </div>

    <div class="topbar-search" v-if="showSearch">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" :placeholder="searchPlaceholder" />
    </div>

    <div class="topbar-actions">
      <button class="topbar-btn" @click="$router.push('/notifications')" title="Notifications">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        <span class="dot"></span>
      </button>
      <button class="topbar-btn" title="Help">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      </button>
      <div class="topbar-avatar" @click="$router.push('/profile')">AM</div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const titles = {
  '/home': 'Home Feed',
  '/directory': 'Alumni Directory',
  '/mentorship': 'Mentorship Hub',
  '/mentorship/request': 'Request Mentorship',
  '/events': 'Events',
  '/calendar': 'My Calendar',
  '/profile': 'My Profile',
  '/notifications': 'Notifications',
  '/admin/event': 'Event Manager',
  '/admin/invites': 'Targeted Invites',
}

const pageTitle = computed(() => {
  for (const [path, title] of Object.entries(titles)) {
    if (route.path.startsWith(path)) return title
  }
  return 'AdDU Alumni'
})

const showSearch = computed(() => ['/home', '/directory', '/events'].includes(route.path))

const searchPlaceholder = computed(() => {
  if (route.path === '/directory') return 'Search alumni by name, company...'
  if (route.path === '/events') return 'Search events, venues...'
  return 'Search...'
})
</script>

<style scoped>
.topbar-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--navy);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 2px solid var(--gold);
}
</style>
