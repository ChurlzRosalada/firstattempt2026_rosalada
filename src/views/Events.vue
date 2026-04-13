<template>
  <div class="events-page page">
    <div class="events-top-header">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <h1 class="events-main-title">AdDU Events</h1>
        <button class="filter-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
        </button>
      </div>
      <div class="search-bar">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input v-model="search" type="text" placeholder="Search events, topics, or venues..." />
      </div>
      <div class="event-tabs">
        <button v-for="tab in tabs" :key="tab" class="event-tab" :class="{ active: activeTab === tab }" @click="activeTab = tab">{{ tab }}</button>
      </div>
    </div>

    <div class="events-content">
      <!-- This Week -->
      <div class="events-group">
        <p class="group-label">THIS WEEK</p>
        <div class="featured-event-card" @click="$router.push('/events/1')">
          <div class="featured-img">
            <div class="feat-tags">
              <span class="feat-tag gala">GALA</span>
              <span class="feat-tag networking">NETWORKING</span>
            </div>
            <div class="feat-date-badge"><span>OCT</span><span>12</span></div>
            <div class="only-seats">Only 5 seats left!</div>
          </div>
          <div class="featured-info">
            <h3>AdDU Annual Alumni Gala 2024</h3>
            <div class="ev-meta"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 7:00 PM – 11:00 PM</div>
            <div class="ev-meta"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Grand Hall, Main Campus</div>
            <div class="featured-footer">
              <div class="avatar-stack">
                <div class="avatar" style="width:20px;height:20px;font-size:8px;background:#2a4f8f;border:2px solid white;">A</div>
                <div class="avatar" style="width:20px;height:20px;font-size:8px;background:#e8937a;border:2px solid white;">B</div>
                <div class="avatar" style="width:20px;height:20px;font-size:8px;background:#6b9e6b;border:2px solid white;">C</div>
              </div>
              <span class="attendee-count">+142</span>
              <button class="book-now" @click.stop="$router.push('/events/ticket')">Book Now →</button>
            </div>
          </div>
        </div>
      </div>

      <!-- November -->
      <div class="events-group" style="margin-top: 20px;">
        <p class="group-label">NOVEMBER</p>
        <div class="event-list-card stagger" v-for="ev in novEvents" :key="ev.id" @click="$router.push('/events/1')">
          <div class="ev-date-pill" :style="{ background: ev.color }">
            <span>{{ ev.month }}</span>
            <span class="ev-day">{{ ev.day }}</span>
          </div>
          <div class="ev-info">
            <h4>{{ ev.title }}</h4>
            <div class="ev-meta"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> {{ ev.time }}</div>
            <div class="ev-meta"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> {{ ev.venue }}</div>
            <span v-if="ev.seats" class="seats-badge">● {{ ev.seats }}</span>
            <span v-if="ev.waitlist" class="waitlist-badge">Waitlist only</span>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>

      <!-- Calendar link -->
      <button class="calendar-link" @click="$router.push('/calendar')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        View Personalized Calendar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
const tabs = ['All', 'Workshops', 'Reunions', 'Webinars']
const activeTab = ref('All')

const novEvents = [
  { id: 1, month: 'NOV', day: '05', title: 'AdDU Annual Alumni Gala 2024', time: 'Online (Zoom) · 2:00 PM EST', venue: '', seats: '45 seats available', color: '#1a3a6b', waitlist: false },
  { id: 2, month: 'NOV', day: '18', title: 'AdDU Annual Alumni Gala 2024', time: '6:30 PM GMT', venue: 'The Shard, London', seats: null, color: '#c9a84c', waitlist: true },
]
</script>

<style scoped>
.events-page { background: var(--bg); }

.events-top-header {
  background: white;
  padding: 52px 20px 0;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 50;
}
.events-main-title { font-size: 22px; font-weight: 700; color: var(--text-primary); margin-bottom: 12px; }
.filter-btn { background: none; border: none; cursor: pointer; color: var(--navy); }

.search-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 10px 12px;
  margin-bottom: 12px;
}
.search-bar input { flex: 1; border: none; outline: none; font-family: var(--font-body); font-size: 13px; background: transparent; }
.search-bar svg { color: var(--text-muted); }

.event-tabs { display: flex; gap: 4px; overflow-x: auto; scrollbar-width: none; }
.event-tab {
  flex-shrink: 0;
  padding: 10px 16px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  color: var(--text-muted);
  transition: all 0.2s;
}
.event-tab.active { color: var(--navy); border-bottom-color: var(--navy); }

.events-content { padding: 20px; }
.events-group {}
.group-label { font-size: 11px; font-weight: 700; color: var(--text-muted); letter-spacing: 1px; margin-bottom: 12px; }

.featured-event-card { cursor: pointer; border-radius: var(--radius-lg); overflow: hidden; background: white; box-shadow: var(--shadow-md); }
.featured-img {
  height: 160px;
  background: linear-gradient(135deg, #1a3a6b 0%, #c9a84c 100%);
  position: relative;
}
.feat-tags { position: absolute; top: 12px; left: 12px; display: flex; gap: 6px; }
.feat-tag { padding: 3px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; }
.feat-tag.gala { background: #c9a84c; color: white; }
.feat-tag.networking { background: white; color: var(--navy); }
.feat-date-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  border-radius: 8px;
  padding: 4px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  color: var(--navy);
}
.feat-date-badge span:last-child { font-size: 20px; line-height: 1.1; }
.only-seats {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: #ef4444;
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
}
.featured-info { padding: 14px; }
.featured-info h3 { font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px; }
.ev-meta { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary); margin-bottom: 3px; }
.featured-footer { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
.avatar-stack { display: flex; }
.avatar-stack .avatar { margin-right: -5px; }
.attendee-count { font-size: 12px; color: var(--text-muted); margin-left: 8px; flex: 1; }
.book-now {
  background: var(--navy);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px 14px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--font-body);
}

.event-list-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border-radius: var(--radius);
  padding: 14px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid var(--border);
}
.ev-date-pill {
  width: 44px;
  border-radius: 10px;
  padding: 6px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 9px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}
.ev-day { font-size: 18px; line-height: 1.1; }
.ev-info { flex: 1; }
.ev-info h4 { font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
.seats-badge { display: inline-block; font-size: 11px; color: #16a34a; font-weight: 500; margin-top: 4px; }
.waitlist-badge { display: inline-block; font-size: 11px; color: var(--text-muted); font-weight: 500; margin-top: 4px; }

.calendar-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  background: white;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--navy);
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s;
}
.calendar-link:hover { background: var(--navy); color: white; }
</style>
