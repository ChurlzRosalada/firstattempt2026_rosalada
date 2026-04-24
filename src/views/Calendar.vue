<template>
  <div class="page-content">
    <div class="page-header">
      <button class="back-btn" @click="$router.back()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <h1>Personalized Calendar</h1>
      <div style="display:flex;gap:6px;">
        <button class="icon-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
        <button class="icon-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg></button>
      </div>
    </div>

    <div class="cal-content">
      <!-- View Toggle -->
      <div class="view-toggle">
        <button class="view-btn" :class="{ active: view === 'month' }" @click="view = 'month'">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Month
        </button>
        <button class="view-btn" :class="{ active: view === 'list' }" @click="view = 'list'">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          List
        </button>
      </div>

      <!-- Sync Toggle -->
      <div class="sync-row">
        <div class="sync-left">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>
          Sync to Phone
        </div>
        <div class="toggle on"></div>
      </div>

      <!-- Month Calendar -->
      <div class="month-calendar card">
        <div class="month-header">
          <button class="month-nav" @click="prevMonth">‹</button>
          <h3>{{ monthName }} {{ currentYear }}</h3>
          <button class="month-nav" @click="nextMonth">›</button>
        </div>
        <div class="day-labels">
          <span v-for="d in ['S','M','T','W','T','F','S']" :key="d">{{ d }}</span>
        </div>
        <div class="day-grid">
          <div v-for="blank in firstDayOfMonth" :key="'b'+blank" class="day-cell"></div>
          <div v-for="day in daysInMonth" :key="day" class="day-cell"
            :class="{
              today: isToday(day),
              selected: selectedDay === day,
              'has-event': hasEvent(day)
            }"
            @click="selectedDay = day">
            {{ day }}
            <span v-if="hasEvent(day)" class="event-dot"></span>
          </div>
        </div>
        <div class="quick-add">
          <span class="qa-label">Quick Add:</span>
          <button class="qa-btn">+ Meeting</button>
          <button class="qa-btn">+ Reminder</button>
        </div>
      </div>

      <!-- Upcoming Events -->
      <div style="margin-top: 20px;">
        <h2 class="section-title">Upcoming Events</h2>
        <div class="upcoming-list stagger">
          <div v-for="ev in upcomingEvents" :key="ev.id" class="upcoming-card" @click="$router.push('/events/1')">
            <div class="up-date" :style="{ background: ev.color }">
              <span>{{ ev.month }}</span>
              <span class="up-day">{{ ev.day }}</span>
            </div>
            <div class="up-info">
              <div class="up-name-row">
                <h4>{{ ev.title }}</h4>
                <span v-if="ev.match" class="match-tag">MATCH</span>
              </div>
              <p class="up-meta">{{ ev.venue }} · {{ ev.time }}</p>
              <div v-if="ev.attendees" class="up-attendees">
                <div class="avatar-stack">
                  <div class="avatar" v-for="a in ev.attendees" :key="a" :style="`width:18px;height:18px;font-size:7px;background:${a};border:1.5px solid white;`"></div>
                </div>
                <span>+{{ ev.count }}</span>
              </div>
            </div>
            <div class="up-action">
              <button v-if="ev.rsvp" class="rsvp-btn" @click.stop="$router.push('/events/ticket')">RSVP Now</button>
              <button v-else-if="ev.register" class="rsvp-btn" @click.stop="$router.push('/events/ticket')">Register</button>
              <span v-else class="details-link">Details</span>
              <button class="more-btn">⋮</button>
            </div>
          </div>
        </div>
      </div>

      <!-- FAB -->
      <button class="fab" @click="$router.push('/admin/event')">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const view = ref('month')
const currentMonth = ref(9) // October (0-indexed)
const currentYear = ref(2023)
const selectedDay = ref(5)

const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
const monthName = computed(() => monthNames[currentMonth.value])

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
})

const firstDayOfMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay()
})

const eventDays = [8, 12, 18]
const hasEvent = (day) => eventDays.includes(day)
const isToday = (day) => day === 5

const prevMonth = () => {
  if (currentMonth.value === 0) { currentMonth.value = 11; currentYear.value-- }
  else currentMonth.value--
}
const nextMonth = () => {
  if (currentMonth.value === 11) { currentMonth.value = 0; currentYear.value++ }
  else currentMonth.value++
}

const upcomingEvents = [
  { id: 1, month: 'OCT', day: '08', title: 'AdDU Annual...', venue: 'Tech Hall A', time: '10:00 AM', match: true, color: '#1a3a6b', attendees: ['#2a4f8f','#e8937a','#6b9e6b'], count: 12, rsvp: true, register: false },
  { id: 2, month: 'OCT', day: '12', title: 'AdDU Annual...', venue: 'Campus Cafe', time: '09:30 AM', match: false, color: '#c9a84c', attendees: null, count: 0, rsvp: false, register: false },
  { id: 3, month: 'OCT', day: '18', title: 'AdDU Annual...', venue: 'Grand Hall', time: '11:00 AM', match: true, color: '#4a7fa5', attendees: ['#2a4f8f','#e8937a','#6b9e6b'], count: 45, rsvp: false, register: true },
]
</script>

<style scoped>
.cal-content { padding: 16px 20px; }

.view-toggle {
  display: flex;
  background: white;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 3px;
  width: fit-content;
  margin-bottom: 12px;
}
.view-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 16px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  color: var(--text-muted);
  background: none;
  transition: all 0.2s;
}
.view-btn.active { background: var(--navy); color: white; }

.sync-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 10px 14px;
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
}
.sync-left { display: flex; align-items: center; gap: 8px; }

.month-calendar { padding: 16px; }
.month-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.month-header h3 { font-size: 15px; font-weight: 600; color: var(--text-primary); }
.month-nav { background: none; border: none; cursor: pointer; font-size: 20px; color: var(--text-secondary); padding: 0 8px; }

.day-labels {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
}
.day-labels span { font-size: 11px; font-weight: 600; color: var(--text-muted); }

.day-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 12px;
}
.day-cell {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  color: var(--text-primary);
  transition: all 0.15s;
}
.day-cell:hover { background: #f0f4ff; }
.day-cell.today {
  background: var(--navy);
  color: white;
  font-weight: 700;
}
.day-cell.selected {
  border: 2px solid var(--navy);
  font-weight: 600;
  color: var(--navy);
}
.day-cell.today.selected { background: var(--navy); color: white; border-color: var(--navy); }
.day-cell.has-event {}
.event-dot {
  position: absolute;
  bottom: 2px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--gold);
}
.day-cell.today .event-dot { background: white; }

.quick-add { display: flex; align-items: center; gap: 8px; border-top: 1px solid var(--border); padding-top: 12px; }
.qa-label { font-size: 12px; color: var(--text-muted); margin-right: 4px; }
.qa-btn {
  padding: 5px 12px;
  border: 1.5px dashed var(--border);
  border-radius: 20px;
  background: none;
  font-size: 12px;
  font-family: var(--font-body);
  cursor: pointer;
  color: var(--text-secondary);
}

.upcoming-list { display: flex; flex-direction: column; gap: 10px; }
.upcoming-card {
  display: flex;
  gap: 12px;
  background: white;
  border-radius: var(--radius);
  padding: 12px;
  border: 1px solid var(--border);
  cursor: pointer;
  align-items: center;
}
.up-date {
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
.up-day { font-size: 18px; line-height: 1.1; }
.up-info { flex: 1; }
.up-name-row { display: flex; align-items: center; gap: 6px; margin-bottom: 3px; }
.up-name-row h4 { font-size: 13px; font-weight: 600; color: var(--text-primary); }
.match-tag { background: var(--gold); color: white; font-size: 9px; font-weight: 700; padding: 2px 6px; border-radius: 4px; }
.up-meta { font-size: 11px; color: var(--text-muted); margin-bottom: 4px; }
.up-attendees { display: flex; align-items: center; gap: 6px; }
.avatar-stack { display: flex; }
.avatar-stack .avatar { margin-right: -4px; }
.up-attendees span { font-size: 11px; color: var(--text-muted); margin-left: 6px; }
.up-action { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
.rsvp-btn { background: var(--navy); color: white; border: none; border-radius: 6px; padding: 5px 10px; font-size: 11px; font-weight: 600; cursor: pointer; font-family: var(--font-body); }
.details-link { font-size: 11px; color: var(--text-muted); }
.more-btn { background: none; border: none; cursor: pointer; font-size: 16px; color: var(--text-muted); }

.icon-btn { background: none; border: none; cursor: pointer; color: var(--navy); padding: 4px; }

.fab {
  position: fixed;
  bottom: 90px;
  right: calc(50% - 200px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--navy);
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
