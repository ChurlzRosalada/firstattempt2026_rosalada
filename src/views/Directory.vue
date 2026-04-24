<template>
  <div class="page-content">
    <div class="dir-header">
      <div>
        <h1 class="page-title">Alumni Directory</h1>
        <p class="page-subtitle">Connect with {{ filtered.length }} verified Blue Knights worldwide.</p>
      </div>
      <button class="btn-primary" @click="$router.push('/admin/invites')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Bulk Invite
      </button>
    </div>

    <!-- Search + Filters -->
    <div class="dir-controls card" style="margin-bottom:20px;padding:16px 20px;">
      <div class="controls-row">
        <div class="search-bar" style="flex:1;max-width:400px;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input v-model="search" type="text" placeholder="Search by name, company, or skill..." />
        </div>
        <div class="filter-chips">
          <div class="filter-chip active">Course ▾</div>
          <div class="filter-chip filled">📅 Batch: 2018–2022 ✕</div>
          <div class="filter-chip">Industry ▾</div>
          <div class="filter-chip">Location ▾</div>
          <div class="filter-chip">Mentor ▾</div>
        </div>
        <div class="view-toggle">
          <button :class="{ active: view === 'grid' }" @click="view = 'grid'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </button>
          <button :class="{ active: view === 'list' }" @click="view = 'list'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Grid view -->
    <div v-if="view === 'grid'" class="alumni-grid stagger">
      <div v-for="al in filtered" :key="al.id" class="alumni-card card">
        <div class="card-top">
          <div class="avatar" :style="`width:56px;height:56px;font-size:18px;background:${al.avatarColor};`">{{ al.initials }}</div>
          <button class="bookmark-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          </button>
        </div>
        <div class="card-mid">
          <h3>{{ al.name }}</h3>
          <p class="al-year">Class of {{ al.year }}</p>
          <p class="al-role">{{ al.role }} at <strong>{{ al.company }}</strong></p>
          <p class="al-info">{{ al.degree }}</p>
          <p class="al-info">📍 {{ al.location }}</p>
        </div>
        <div class="card-actions">
          <button v-if="al.connected === 'pending'" class="btn-pending" disabled>✓ Pending</button>
          <button v-else class="btn-primary" style="padding:7px 14px;font-size:13px;" @click="$router.push('/mentorship/request')">Connect</button>
          <button class="btn-secondary" style="padding:7px 14px;font-size:13px;" @click="$router.push('/profile')">Profile</button>
        </div>
      </div>
    </div>

    <!-- List view -->
    <div v-else class="alumni-list-view stagger">
      <div v-for="al in filtered" :key="al.id" class="alumni-list-row card">
        <div class="avatar" :style="`width:46px;height:46px;font-size:16px;background:${al.avatarColor};`">{{ al.initials }}</div>
        <div class="list-info">
          <div class="list-name-row">
            <h3>{{ al.name }}</h3>
            <span class="al-year">Class of {{ al.year }}</span>
          </div>
          <p class="al-role">{{ al.role }} at <strong>{{ al.company }}</strong></p>
          <p class="al-info">{{ al.degree }} · 📍 {{ al.location }}</p>
        </div>
        <div class="list-actions">
          <button v-if="al.connected === 'pending'" class="btn-pending" disabled>✓ Pending</button>
          <button v-else class="btn-primary" style="padding:7px 16px;font-size:13px;" @click="$router.push('/mentorship/request')">Connect</button>
          <button class="btn-secondary" style="padding:7px 16px;font-size:13px;" @click="$router.push('/profile')">View Profile</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const search = ref('')
const view = ref('grid')
const alumni = [
  { id: 1, name: 'Sarah Jenkins', initials: 'SJ', avatarColor: '#e8937a', year: '2018', role: 'Senior UX Designer', company: 'Adobe', degree: 'B.Sc. Computer Science', location: 'San Francisco, CA', connected: null },
  { id: 2, name: 'Michael Chen', initials: 'MC', avatarColor: '#4a7fa5', year: '2019', role: 'Product Manager', company: 'Google', degree: 'MBA, Business Administration', location: 'New York, NY', connected: 'pending' },
  { id: 3, name: 'Emily Rodriguez', initials: 'ER', avatarColor: '#6b9e6b', year: '2020', role: 'Software Engineer', company: 'Spotify', degree: 'M.Sc. Data Science', location: 'London, UK', connected: null },
  { id: 4, name: 'David Kim', initials: 'DK', avatarColor: '#8b7fad', year: '2021', role: 'Founder', company: 'Stealth Startup', degree: 'BS Information Technology', location: 'Singapore', connected: null },
  { id: 5, name: 'Lisa Wong', initials: 'LW', avatarColor: '#c9a84c', year: '2017', role: 'Senior Data Scientist', company: 'Uber', degree: 'M.Sc. Computer Science', location: 'San Francisco, CA', connected: null },
  { id: 6, name: 'James Park', initials: 'JP', avatarColor: '#2a4f8f', year: '2016', role: 'Software Engineer', company: 'Meta', degree: 'BS Computer Engineering', location: 'Menlo Park, CA', connected: null },
]
const filtered = computed(() => alumni.filter(a => !search.value || a.name.toLowerCase().includes(search.value.toLowerCase()) || a.company.toLowerCase().includes(search.value.toLowerCase())))
</script>

<style scoped>
.dir-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }
.controls-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.view-toggle { display: flex; background: var(--bg); border-radius: 8px; padding: 2px; border: 1px solid var(--border); }
.view-toggle button { width: 32px; height: 32px; border: none; background: none; cursor: pointer; color: var(--text-muted); border-radius: 6px; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.view-toggle button.active { background: white; color: var(--navy); box-shadow: var(--shadow-sm); }

.alumni-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.alumni-card { display: flex; flex-direction: column; gap: 12px; }
.card-top { display: flex; justify-content: space-between; align-items: flex-start; }
.bookmark-btn { background: none; border: none; cursor: pointer; color: var(--text-muted); padding: 4px; }
.card-mid { flex: 1; }
.card-mid h3 { font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 2px; }
.al-year { font-size: 11px; color: var(--gold); font-weight: 600; margin-bottom: 6px; }
.al-role { font-size: 13px; color: var(--text-secondary); margin-bottom: 3px; }
.al-role strong { color: var(--text-primary); }
.al-info { font-size: 12px; color: var(--text-muted); margin-bottom: 2px; }
.card-actions { display: flex; gap: 8px; margin-top: auto; }
.btn-pending { padding: 7px 14px; background: #f0f9ff; color: #3b82f6; border: 1.5px solid #93c5fd; border-radius: 8px; font-family: var(--font-body); font-size: 13px; font-weight: 500; cursor: default; }

.alumni-list-view { display: flex; flex-direction: column; gap: 10px; }
.alumni-list-row { display: flex; align-items: center; gap: 16px; padding: 16px 20px; }
.list-info { flex: 1; }
.list-name-row { display: flex; align-items: center; gap: 10px; margin-bottom: 3px; }
.list-name-row h3 { font-size: 15px; font-weight: 700; color: var(--text-primary); }
.list-actions { display: flex; gap: 8px; }
</style>
