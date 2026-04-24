<template>
  <div class="page-content">
    <div class="page-header">
      <button class="back-btn" @click="$router.back()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <h1>Admin Event Manager</h1>
      <button class="save-draft-btn" @click="saved = true">Save Draft</button>
    </div>

    <div v-if="saved" class="save-toast">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      Draft saved!
    </div>

    <div class="admin-content">
      <!-- Cover Photo -->
      <div class="cover-photo-upload">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        <p>Change Cover Photo</p>
      </div>

      <!-- Event Details -->
      <div class="form-section">
        <h2 class="form-section-title">Event Details</h2>
        <div class="form-group">
          <input v-model="form.title" type="text" class="form-input" placeholder="e.g. AdDU Alumni Homecoming 2024" />
        </div>
        <div class="date-time-row">
          <div class="form-group" style="flex:1;">
            <div class="input-icon-wrap">
              <svg class="input-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <input v-model="form.date" type="date" class="form-input has-icon" />
            </div>
          </div>
          <div class="form-group" style="flex:1;">
            <div class="input-icon-wrap">
              <svg class="input-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <input v-model="form.time" type="time" class="form-input has-icon" />
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon-wrap">
            <svg class="input-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <input v-model="form.location" type="text" class="form-input has-icon" placeholder="e.g. Martin Hall, Jacinto Campus" />
          </div>
        </div>
        <div class="form-group">
          <textarea v-model="form.description" class="form-input" style="height:90px;resize:none;" placeholder="Provide event details for the university community..."></textarea>
        </div>
      </div>

      <!-- Attendance & Ticketing -->
      <div class="form-section">
        <h2 class="form-section-title">Attendance & Ticketing</h2>
        <div class="toggle-row">
          <div>
            <p class="toggle-label">Limit RSVPs</p>
            <p class="toggle-sub">Set a maximum capacity for the venue</p>
          </div>
          <div class="toggle" :class="{ on: form.limitRsvp }" @click="form.limitRsvp = !form.limitRsvp"></div>
        </div>
        <div class="price-row">
          <div class="form-group" style="flex:1;">
            <label>Ticket Price</label>
            <div class="input-icon-wrap">
              <span class="currency-symbol">₱</span>
              <input v-model="form.price" type="number" class="form-input has-icon" placeholder="0.00" />
            </div>
          </div>
          <div class="form-group" style="flex:0.6;">
            <label>Currency</label>
            <select v-model="form.currency" class="form-input">
              <option>PHP</option><option>USD</option><option>EUR</option>
            </select>
          </div>
        </div>
        <p class="leave-note">Leave 0.00 for free events.</p>

        <div class="gateway-card">
          <div class="gateway-left">
            <div class="gateway-icon">💳</div>
            <div>
              <p class="gateway-name">AdDU Finance Office</p>
              <p class="gateway-role">Gateway: University Official (#38)</p>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <button class="manage-settings-btn">Manage Settings</button>
      </div>

      <!-- Check-in Settings -->
      <div class="form-section">
        <h2 class="form-section-title">Check-in Settings</h2>
        <div class="checkin-option">
          <div class="checkin-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M9 21V9"/></svg>
          </div>
          <div class="checkin-info">
            <p class="checkin-label">QR Check-in Required</p>
            <p class="checkin-sub">Attendees must scan QR code to enter</p>
          </div>
          <div class="toggle on"></div>
        </div>
        <div class="checkin-option">
          <div class="checkin-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>
          </div>
          <div class="checkin-info">
            <p class="checkin-label">Alumni Verification</p>
            <p class="checkin-sub">Only verified alumni accounts</p>
          </div>
          <div class="toggle" :class="{ on: form.alumniVerif }" @click="form.alumniVerif = !form.alumniVerif"></div>
        </div>
      </div>

      <button class="btn-primary" @click="handlePublish" style="margin-top: 8px; margin-bottom: 24px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        Publish Event
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const saved = ref(false)

const form = reactive({
  title: '', date: '', time: '', location: '', description: '',
  limitRsvp: false, price: '', currency: 'PHP', alumniVerif: false
})

const handlePublish = () => router.push('/events')
</script>

<style scoped>
.admin-content { padding: 0 20px 24px; }

.save-draft-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--navy);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
}

.save-toast {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #dcfce7;
  color: #16a34a;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 500;
}

.cover-photo-upload {
  height: 130px;
  background: linear-gradient(135deg, #1a3a6b, #2a6fd4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  margin: 0 -20px;
  margin-bottom: 20px;
}
.cover-photo-upload p { font-size: 13px; color: rgba(255,255,255,0.8); font-weight: 500; }

.form-section { margin-bottom: 20px; }
.form-section-title { font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 14px; }

.date-time-row { display: flex; gap: 10px; }
.input-icon-wrap { position: relative; }
.input-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); }
.form-input.has-icon { padding-left: 36px; }
.currency-symbol { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 14px; }

.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 12px;
}
.toggle-label { font-size: 14px; font-weight: 500; color: var(--text-primary); }
.toggle-sub { font-size: 12px; color: var(--text-muted); margin-top: 2px; }

.price-row { display: flex; gap: 10px; }
.leave-note { font-size: 12px; color: var(--text-muted); margin-top: -8px; margin-bottom: 12px; }

.gateway-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8faff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px;
  margin-bottom: 8px;
}
.gateway-left { display: flex; align-items: center; gap: 10px; }
.gateway-icon { font-size: 22px; }
.gateway-name { font-size: 13px; font-weight: 600; color: var(--text-primary); }
.gateway-role { font-size: 11px; color: var(--text-muted); }
.manage-settings-btn { background: none; border: none; cursor: pointer; color: var(--navy); font-size: 13px; font-family: var(--font-body); font-weight: 500; padding: 0; }

.checkin-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}
.checkin-option:last-child { border-bottom: none; }
.checkin-icon { width: 40px; height: 40px; background: #eef2ff; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.checkin-info { flex: 1; }
.checkin-label { font-size: 14px; font-weight: 500; color: var(--text-primary); }
.checkin-sub { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
</style>
