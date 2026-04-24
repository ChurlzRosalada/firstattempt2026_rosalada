<template>
  <div class="page-content">
    <div class="page-header">
      <button class="back-btn" @click="$router.back()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <h1>Notification Settings</h1>
      <div style="width:28px;"></div>
    </div>

    <!-- Tabs -->
    <div class="notif-tabs">
      <button class="notif-tab" :class="{ active: tab === 'history' }" @click="tab = 'history'">History</button>
      <button class="notif-tab" :class="{ active: tab === 'settings' }" @click="tab = 'settings'">Settings</button>
    </div>

    <div class="notif-content" v-if="tab === 'settings'">
      <!-- Channels -->
      <div class="notif-group">
        <h2 class="notif-group-title">Channels</h2>
        <div class="notif-card card">
          <div v-for="channel in channels" :key="channel.key" class="notif-row">
            <div class="notif-icon-wrap">
              <span v-html="channel.icon"></span>
            </div>
            <div class="notif-info">
              <p class="notif-label">{{ channel.label }}</p>
              <p class="notif-desc">{{ channel.desc }}</p>
            </div>
            <div class="toggle" :class="{ on: channel.enabled }" @click="channel.enabled = !channel.enabled"></div>
          </div>
        </div>
      </div>

      <!-- Preferences -->
      <div class="notif-group">
        <h2 class="notif-group-title">Preferences</h2>
        <div class="notif-card card">
          <div v-for="pref in preferences" :key="pref.group" class="pref-group">
            <div class="pref-group-header">
              <span v-html="pref.icon"></span>
              <strong>{{ pref.group }}</strong>
            </div>
            <div v-for="item in pref.items" :key="item.label" class="notif-row sub-row">
              <p class="notif-label sub-label">{{ item.label }}</p>
              <div class="toggle" :class="{ on: item.enabled }" @click="item.enabled = !item.enabled"></div>
            </div>
          </div>
        </div>
      </div>

      <button class="reset-btn">Reset all notification settings</button>
    </div>

    <!-- History tab -->
    <div class="notif-content" v-else>
      <div class="notif-history stagger">
        <div v-for="n in notifHistory" :key="n.id" class="history-item">
          <div class="history-icon" :style="{ background: n.color }">
            <span v-html="n.icon"></span>
          </div>
          <div class="history-info">
            <p class="history-text">{{ n.text }}</p>
            <p class="history-time">{{ n.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const tab = ref('settings')

const channels = reactive([
  { key: 'push', label: 'Push Notifications', desc: 'Instant alerts on your device', enabled: true, icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' },
  { key: 'email', label: 'Email Digest', desc: 'Daily summary of activity', enabled: false, icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' },
])

const preferences = reactive([
  {
    group: 'Event Reminders',
    icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    items: [
      { label: 'Upcoming events', enabled: true },
      { label: 'New events near me', enabled: true },
    ]
  },
  {
    group: 'Networking',
    icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>',
    items: [
      { label: 'Connection requests', enabled: true },
      { label: 'Profile views', enabled: false },
    ]
  },
  {
    group: 'Mentorship',
    icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    items: [
      { label: 'New mentor matches', enabled: true },
      { label: 'Session reminders', enabled: true },
      { label: 'Feedback requests', enabled: false },
    ]
  },
])

const notifHistory = [
  { id: 1, text: 'Sarah Jenkins accepted your connection request.', time: '2 hours ago', color: '#eef2ff', icon: '👋' },
  { id: 2, text: 'Reminder: AdDU Annual Alumni Gala is tomorrow at 7:00 PM.', time: '5 hours ago', color: '#fef3c7', icon: '📅' },
  { id: 3, text: 'You have a new mentor match with Michael Chen (95% match).', time: 'Yesterday', color: '#dcfce7', icon: '🎓' },
  { id: 4, text: 'Your mentorship request to Emily Zhang was accepted.', time: '2 days ago', color: '#fce7f3', icon: '✅' },
]
</script>

<style scoped>
.notif-tabs {
  display: flex;
  background: white;
  border-bottom: 1px solid var(--border);
}
.notif-tab {
  flex: 1;
  padding: 12px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: var(--text-muted);
  transition: all 0.2s;
}
.notif-tab.active { color: var(--navy); border-bottom-color: var(--navy); }

.notif-content { padding: 16px 20px; }
.notif-group { margin-bottom: 20px; }
.notif-group-title { font-size: 13px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 8px; }

.notif-card {}
.notif-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}
.notif-row:last-child { border-bottom: none; }
.notif-icon-wrap {
  width: 40px;
  height: 40px;
  background: #f0f4ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.notif-info { flex: 1; }
.notif-label { font-size: 14px; font-weight: 500; color: var(--text-primary); }
.notif-desc { font-size: 12px; color: var(--text-muted); margin-top: 2px; }

.pref-group { border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-bottom: 4px; }
.pref-group:last-child { border-bottom: none; }
.pref-group-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}
.sub-row { padding: 8px 0 8px 22px; border-bottom: none; }
.sub-label { font-size: 13px; color: var(--text-secondary); }

.reset-btn {
  width: 100%;
  padding: 14px;
  background: white;
  border: 1.5px solid #fca5a5;
  border-radius: var(--radius);
  color: var(--danger);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.reset-btn:hover { background: #fef2f2; }

.notif-history { display: flex; flex-direction: column; gap: 2px; }
.history-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px;
  background: white;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  margin-bottom: 8px;
}
.history-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}
.history-text { font-size: 13px; color: var(--text-primary); line-height: 1.4; }
.history-time { font-size: 11px; color: var(--text-muted); margin-top: 3px; }
</style>
