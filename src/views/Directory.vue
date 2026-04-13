<template>
  <div class="dir-page page">
    <div class="page-header">
      <div style="width:28px;"></div>
      <h1>Alumni Directory</h1>
      <button class="filter-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
      </button>
    </div>

    <div class="dir-content">
      <!-- Search -->
      <div class="search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input v-model="search" type="text" placeholder="Search alumni by name or company..." />
      </div>

      <!-- Filters -->
      <div class="filter-chips">
        <div class="filter-chip active">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          Course ▾
        </div>
        <div class="filter-chip has-value">
          📅 Batch: 2018–2022 ✕
        </div>
        <div class="filter-chip">Mentor ▾</div>
      </div>

      <p class="result-count">Showing {{ filtered.length }} Alumni</p>

      <!-- Alumni Cards -->
      <div class="alumni-list stagger">
        <div v-for="al in filtered" :key="al.id" class="alumni-card card">
          <div class="alumni-card-top">
            <div class="avatar" :style="`width:52px;height:52px;font-size:18px;background:${al.avatarColor};`">{{ al.initials }}</div>
            <div class="alumni-info">
              <div class="alumni-name-row">
                <h3>{{ al.name }}</h3>
                <span class="alumni-year">Class of {{ al.year }}</span>
              </div>
              <p class="alumni-role">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                {{ al.role }} at <strong>{{ al.company }}</strong>
              </p>
              <p class="alumni-edu">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                {{ al.degree }}
              </p>
              <p class="alumni-loc">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ al.location }}
              </p>
            </div>
            <button class="bookmark-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </button>
          </div>
          <div class="alumni-actions">
            <button v-if="al.connected === 'pending'" class="btn-pending" disabled>✓ Pending</button>
            <button v-else class="btn-filled-sm" @click="$router.push('/directory')">Connect</button>
            <button v-if="al.connected === 'pending'" class="btn-filled-sm" @click="$router.push('/mentorship/request')">Message</button>
            <button v-else class="btn-outline-sm" @click="$router.push('/profile')">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const alumni = [
  { id: 1, name: 'Sarah Jenkins', initials: 'SJ', avatarColor: '#e8937a', year: '2018', role: 'Senior UX Designer', company: 'Adobe', degree: 'B.Sc. Computer Science', location: 'San Francisco, CA', connected: null },
  { id: 2, name: 'Michael Chen', initials: 'MC', avatarColor: '#4a7fa5', year: '2019', role: 'Product Manager', company: 'Google', degree: 'MBA, Business Administration', location: 'New York, NY', connected: 'pending' },
  { id: 3, name: 'Emily Rodriguez', initials: 'ER', avatarColor: '#6b9e6b', year: '2020', role: 'Software Engineer', company: 'Spotify', degree: 'M.Sc. Data Science', location: 'London, UK', connected: null },
  { id: 4, name: 'David Kim', initials: 'DK', avatarColor: '#8b7fad', year: '2021', role: 'Founder', company: 'Stealth Startup', degree: '', location: '', connected: null },
]

const filtered = computed(() =>
  alumni.filter(a => !search.value || a.name.toLowerCase().includes(search.value.toLowerCase()) || a.company.toLowerCase().includes(search.value.toLowerCase()))
)
</script>

<style scoped>
.dir-content { padding: 16px 20px; }

.filter-btn { background: none; border: none; cursor: pointer; color: var(--navy); padding: 4px; }

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 11px 14px;
  margin-bottom: 12px;
}
.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-primary);
}
.search-bar svg { color: var(--text-muted); flex-shrink: 0; }

.filter-chips { display: flex; gap: 8px; overflow-x: auto; margin-bottom: 12px; scrollbar-width: none; }
.filter-chip {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
}
.filter-chip.active { border-color: var(--navy); color: var(--navy); }
.filter-chip.has-value { background: var(--navy); color: white; border-color: var(--navy); }

.result-count { font-size: 12px; color: var(--text-muted); margin-bottom: 12px; }

.alumni-list { display: flex; flex-direction: column; gap: 12px; }

.alumni-card-top { display: flex; gap: 12px; margin-bottom: 12px; }
.alumni-info { flex: 1; }
.alumni-name-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
.alumni-name-row h3 { font-size: 15px; font-weight: 600; color: var(--text-primary); }
.alumni-year { font-size: 11px; color: var(--gold); font-weight: 600; }
.alumni-role, .alumni-edu, .alumni-loc {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 2px;
}
.alumni-role strong { color: var(--text-primary); }

.bookmark-btn { background: none; border: none; cursor: pointer; color: var(--text-muted); flex-shrink: 0; padding: 2px; }

.alumni-actions { display: flex; gap: 8px; }
.btn-pending {
  padding: 7px 16px;
  background: #f0f9ff;
  color: #3b82f6;
  border: 1.5px solid #93c5fd;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  cursor: default;
}
</style>
