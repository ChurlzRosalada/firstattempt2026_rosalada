<template>
  <div class="page-content">
    <div class="events-header">
      <div>
        <h1 class="page-title">AdDU Events</h1>
        <p class="page-subtitle">Discover and register for upcoming alumni gatherings.</p>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="btn-secondary" @click="$router.push('/calendar')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          My Calendar
        </button>
        <button class="btn-primary" @click="$router.push('/admin/event')">+ Create Event</button>
      </div>
    </div>

    <!-- Search + Tabs -->
    <div class="card" style="padding:16px 20px;margin-bottom:24px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
        <div class="search-bar" style="flex:1;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input v-model="search" type="text" placeholder="Search events, topics, or venues..." />
        </div>
        <div class="filter-chips">
          <div v-for="tab in tabs" :key="tab" class="filter-chip" :class="{ filled: activeTab === tab }" @click="activeTab = tab">{{ tab }}</div>
        </div>
      </div>
    </div>

    <div class="events-layout">
      <!-- LEFT: Featured + list -->
      <div class="events-main">
        <!-- Featured -->
        <div class="featured-card card" @click="$router.push('/events/1')">
          <div class="featured-img">
            <div class="feat-overlay"></div>
            <div class="feat-badges">
              <span class="feat-tag gold">GALA</span>
              <span class="feat-tag white">NETWORKING</span>
              <span class="seats-pill">🔥 Only 5 seats left!</span>
            </div>
            <div class="feat-date">
              <span>OCT</span>
              <span class="feat-day">12</span>
            </div>
          </div>
          <div class="featured-body">
            <div class="feat-info">
              <h2>AdDU Annual Alumni Gala 2024</h2>
              <div class="feat-meta-row">
                <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 7:00 PM – 11:00 PM</span>
                <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Grand Hall, Main Campus</span>
              </div>
              <div class="feat-footer">
                <div class="avatar-stack">
                  <div class="avatar" style="width:22px;height:22px;font-size:8px;background:#2a4f8f;">A</div>
                  <div class="avatar" style="width:22px;height:22px;font-size:8px;background:#e8937a;">B</div>
                  <div class="avatar" style="width:22px;height:22px;font-size:8px;background:#6b9e6b;">C</div>
                </div>
                <span style="font-size:13px;color:var(--text-muted);margin-left:8px;">+142 attending</span>
              </div>
            </div>
            <button class="btn-primary" style="flex-shrink:0;align-self:center;" @click.stop="$router.push('/events/ticket')">Book Now →</button>
          </div>
        </div>

        <!-- Event list -->
        <h2 class="section-title" style="margin-top:8px;">Upcoming Events</h2>
        <div class="event-list stagger">
          <div v-for="ev in novEvents" :key="ev.id" class="event-row card" @click="$router.push('/events/1')">
            <div class="ev-date-pill" :style="{ background: ev.color }">
              <span>{{ ev.month }}</span>
              <span class="ev-day">{{ ev.day }}</span>
            </div>
            <div class="ev-body">
              <h4>{{ ev.title }}</h4>
              <div class="ev-metas">
                <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> {{ ev.time }}</span>
                <span v-if="ev.venue"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> {{ ev.venue }}</span>
              </div>
              <span v-if="ev.seats" class="seats-badge">● {{ ev.seats }}</span>
              <span v-if="ev.waitlist" class="waitlist-badge">Waitlist only</span>
            </div>
            <div class="ev-actions">
              <button class="btn-primary" style="padding:7px 16px;font-size:13px;" @click.stop="$router.push('/events/ticket')">Register</button>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Calendar mini + Categories -->
      <div class="events-sidebar">
        <div class="card" style="margin-bottom:16px;">
          <h3 class="section-title">Browse by Category</h3>
          <div class="cat-list">
            <div v-for="cat in categories" :key="cat.label" class="cat-item">
              <div class="cat-icon" :style="{ background: cat.bg }"><span v-html="cat.icon"></span></div>
              <div class="cat-info">
                <p class="cat-label">{{ cat.label }}</p>
                <p class="cat-count">{{ cat.count }} events</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </div>
        <div class="card">
          <h3 class="section-title">My Registered Events</h3>
          <div class="reg-list">
            <div class="reg-item">
              <div class="reg-dot navy"></div>
              <div>
                <p class="reg-name">Blue & Gold Gala Night</p>
                <p class="reg-date">Dec 8, 2024</p>
              </div>
              <button class="btn-ghost" style="padding:4px 10px;font-size:12px;" @click="$router.push('/events/ticket')">Ticket</button>
            </div>
          </div>
          <button class="btn-ghost" style="width:100%;justify-content:center;margin-top:10px;" @click="$router.push('/calendar')">View Calendar →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
const tabs = ['All', 'Workshops', 'Reunions', 'Webinars', 'Gala']
const activeTab = ref('All')

const novEvents = [
  { id: 1, month: 'NOV', day: '05', title: 'AdDU Annual Alumni Gala 2024', time: 'Online (Zoom) · 2:00 PM EST', venue: '', seats: '45 seats available', color: '#1a3a6b', waitlist: false },
  { id: 2, month: 'NOV', day: '18', title: 'Global Alumni Meetup London', time: '6:30 PM GMT', venue: 'The Shard, London', seats: null, color: '#c9a84c', waitlist: true },
  { id: 3, month: 'DEC', day: '08', title: 'Blue & Gold Gala Night', time: '6:00 PM', venue: 'Finster Hall, AdDU Jacinto', seats: '12 seats available', color: '#4a7fa5', waitlist: false },
]

const categories = [
  { label: 'Networking Events', count: 12, bg: '#eef2ff', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  { label: 'Workshops & Talks', count: 8, bg: '#fef3c7', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>' },
  { label: 'Reunions', count: 3, bg: '#dcfce7', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
  { label: 'Webinars', count: 5, bg: '#fce7f3', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>' },
]
</script>

<style scoped>
.events-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }
.events-layout { display: grid; grid-template-columns: 1fr 280px; gap: 24px; align-items: start; }
.events-main { display: flex; flex-direction: column; gap: 16px; }
.events-sidebar { position: sticky; top: 80px; }

.featured-card { overflow: hidden; cursor: pointer; transition: box-shadow 0.2s; padding: 0; }
.featured-card:hover { box-shadow: var(--shadow-lg); }
.featured-img { height: 200px; background: linear-gradient(135deg, #1a3a6b 0%, #c9a84c 100%); position: relative; }
.feat-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.15); }
.feat-badges { position: absolute; top: 14px; left: 14px; display: flex; gap: 6px; z-index: 1; }
.feat-tag { padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: 700; }
.feat-tag.gold { background: #c9a84c; color: white; }
.feat-tag.white { background: white; color: var(--navy); }
.seats-pill { background: #ef4444; color: white; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px; }
.feat-date { position: absolute; top: 14px; right: 14px; background: white; border-radius: 8px; padding: 6px 12px; text-align: center; font-size: 10px; font-weight: 700; color: var(--navy); z-index: 1; }
.feat-day { font-size: 22px; display: block; line-height: 1.1; }
.featured-body { padding: 18px 20px; display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
.feat-info { flex: 1; }
.feat-info h2 { font-size: 18px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
.feat-meta-row { display: flex; gap: 16px; margin-bottom: 10px; }
.feat-meta-row span { display: flex; align-items: center; gap: 5px; font-size: 13px; color: var(--text-secondary); }
.feat-footer { display: flex; align-items: center; }

.event-list { display: flex; flex-direction: column; gap: 10px; }
.event-row { display: flex; align-items: center; gap: 14px; cursor: pointer; transition: all 0.15s; }
.event-row:hover { border-color: var(--navy); }
.ev-date-pill { width: 48px; border-radius: 10px; padding: 7px 0; display: flex; flex-direction: column; align-items: center; font-size: 9px; font-weight: 700; color: white; flex-shrink: 0; }
.ev-day { font-size: 20px; line-height: 1.1; }
.ev-body { flex: 1; }
.ev-body h4 { font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
.ev-metas { display: flex; gap: 14px; }
.ev-metas span { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--text-muted); }
.seats-badge { display: inline-block; font-size: 11px; color: #16a34a; font-weight: 500; margin-top: 5px; }
.waitlist-badge { display: inline-block; font-size: 11px; color: var(--text-muted); margin-top: 5px; }
.ev-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

.cat-list { display: flex; flex-direction: column; gap: 4px; }
.cat-item { display: flex; align-items: center; gap: 10px; padding: 9px 6px; border-radius: 8px; cursor: pointer; transition: background 0.15s; }
.cat-item:hover { background: var(--bg); }
.cat-icon { width: 34px; height: 34px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.cat-info { flex: 1; }
.cat-label { font-size: 13px; font-weight: 500; color: var(--text-primary); }
.cat-count { font-size: 11px; color: var(--text-muted); }

.reg-list { display: flex; flex-direction: column; gap: 8px; }
.reg-item { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--border); }
.reg-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.reg-dot.navy { background: var(--navy); }
.reg-name { font-size: 13px; font-weight: 500; color: var(--text-primary); }
.reg-date { font-size: 11px; color: var(--text-muted); }
</style>
