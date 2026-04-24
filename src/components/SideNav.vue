<template>
  <aside class="sidebar">
    <!-- Logo / Brand -->
    <div class="sidebar-logo">
      <div class="seal">
        <div class="seal-circle">AdDU</div>
        <div>
          <div class="app-name">AdDU Alumni</div>
          <div class="app-sub">ATENEO DE DAVAO</div>
        </div>
      </div>
      <!-- User quick card -->
      <div class="sidebar-user" @click="$router.push('/profile')">
        <div class="avatar">AM</div>
        <div class="user-info">
          <div class="name">Alex Morgan</div>
          <div class="role">Class of 2018 · Verified</div>
        </div>
      </div>
    </div>

    <!-- Navigation Links -->
    <nav class="sidebar-nav">
      <div class="nav-section-label">Main</div>

      <router-link to="/home" class="nav-item" :class="{ active: isActive('/home') }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Home Feed
      </router-link>

      <router-link to="/directory" class="nav-item" :class="{ active: isActive('/directory') }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Alumni Directory
      </router-link>

      <router-link to="/mentorship" class="nav-item" :class="{ active: isActive('/mentorship') }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        Mentorship Hub
      </router-link>

      <div class="nav-section-label">Events</div>

      <router-link to="/events" class="nav-item" :class="{ active: isActive('/events') }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Events
      </router-link>

      <router-link to="/calendar" class="nav-item" :class="{ active: isActive('/calendar') }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        My Calendar
      </router-link>

      <div class="nav-section-label">Account</div>

      <router-link to="/profile" class="nav-item" :class="{ active: isActive('/profile') }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        My Profile
      </router-link>

      <router-link to="/notifications" class="nav-item" :class="{ active: isActive('/notifications') }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        Notifications
        <span class="nav-badge">3</span>
      </router-link>

      <div class="nav-section-label">Admin</div>

      <router-link to="/admin/event" class="nav-item" :class="{ active: isActive('/admin/event') }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        Event Manager
      </router-link>

      <router-link to="/admin/invites" class="nav-item" :class="{ active: isActive('/admin/invites') }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Targeted Invites
      </router-link>
    </nav>

    <!-- Footer -->
    <div class="sidebar-footer">
      <div class="nav-item" @click="$router.push('/login')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Sign Out
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const isActive = (path) => route.path.startsWith(path)
</script>
