<template>
  <div class="page-content">
    <div class="page-header">
      <button class="back-btn" @click="$router.back()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <h1>Targeted Invites</h1>
      <button class="reset-link" @click="resetFilters">Reset</button>
    </div>

    <div class="invites-content">
      <!-- Step indicator -->
      <div class="step-header">
        <h2>Target Audience</h2>
        <span class="step-badge">Step 1/2</span>
      </div>
      <p class="step-desc">Filter verified AdDU alumni to send targeted event invitations.</p>

      <!-- Filter chips -->
      <div class="filter-chips-wrap">
        <div v-for="f in filterOptions" :key="f.label" class="filter-chip">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
          {{ f.label }} ▾
        </div>
        <button class="add-filter-btn">+</button>
      </div>

      <!-- Selected Criteria -->
      <div class="criteria-box">
        <div class="criteria-header">
          <span class="crit-dot"></span>
          <strong>SELECTED CRITERIA</strong>
        </div>
        <div class="criteria-tags">
          <span v-for="tag in selectedCriteria" :key="tag" class="crit-tag">
            {{ tag }} ✕
          </span>
        </div>
        <div class="reach-row">
          <div class="reach-label">Estimated Reach</div>
          <div class="reach-right">
            <div class="avatar-stack">
              <div class="avatar" v-for="c in ['#2a4f8f','#e8937a','#6b9e6b','#8b7fad']" :key="c" :style="`width:22px;height:22px;font-size:8px;background:${c};border:2px solid white;`"></div>
            </div>
            <span class="reach-count">+447</span>
          </div>
        </div>
        <p class="reach-num">~450 users</p>
      </div>

      <!-- Invitation Preview -->
      <div class="preview-section">
        <div class="preview-header">
          <h3>Invitation Preview</h3>
          <button class="edit-msg-btn">✏️ Edit Message</button>
        </div>
        <div class="invite-preview-card">
          <div class="preview-event-img">
            <span class="preview-tag">EVENT</span>
          </div>
          <div class="preview-body">
            <h4>Annual Tech Alumni Meetup 2024</h4>
            <div class="preview-meta">
              <span>📅 Oct 24</span>
              <span>⏰ 6:00 PM</span>
            </div>
            <p class="preview-desc">Join us for an evening of networking and insights with fellow alumni in the tech industry. Refreshments provided.</p>
            <button class="rsvp-preview-btn">RSVP Now</button>
          </div>
        </div>
      </div>

      <button class="btn-primary" style="margin-top: 20px;" @click="handleSend">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Send Bulk Invite (450)
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const filterOptions = [
  { label: 'Batch Year' },
  { label: 'Industry' },
  { label: 'Location' },
]

const selectedCriteria = ref(['2015–2020', 'Technology', 'New York, NY'])

const resetFilters = () => { selectedCriteria.value = [] }
const handleSend = () => router.push('/home')
</script>

<style scoped>
.invites-content { padding: 16px 20px; }

.step-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}
.step-header h2 { font-family: var(--font-display); font-size: 20px; color: var(--text-primary); }
.step-badge {
  background: #eef2ff;
  color: var(--navy);
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
}
.step-desc { font-size: 13px; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.5; }

.filter-chips-wrap { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
.filter-chip {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  color: var(--text-primary);
}
.add-filter-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1.5px dashed var(--border);
  background: none;
  cursor: pointer;
  font-size: 18px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
}

.criteria-box {
  background: white;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 14px;
  margin-bottom: 20px;
}
.criteria-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}
.crit-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--success); }
.criteria-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
.crit-tag {
  background: #eef2ff;
  color: var(--navy);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}
.reach-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
.reach-label { font-size: 12px; color: var(--text-muted); }
.reach-right { display: flex; align-items: center; gap: 4px; }
.avatar-stack { display: flex; }
.avatar-stack .avatar { margin-right: -6px; }
.reach-count { font-size: 12px; color: var(--text-muted); margin-left: 10px; }
.reach-num { font-size: 22px; font-weight: 700; color: var(--navy); }

.preview-section {}
.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.preview-header h3 { font-size: 15px; font-weight: 600; color: var(--text-primary); }
.edit-msg-btn { background: none; border: none; cursor: pointer; font-size: 12px; color: var(--navy); font-family: var(--font-body); }

.invite-preview-card {
  background: white;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.preview-event-img {
  height: 80px;
  background: linear-gradient(135deg, #1a3a6b, #c9a84c);
  display: flex;
  align-items: flex-end;
  padding: 10px;
}
.preview-tag { background: var(--gold); color: white; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
.preview-body { padding: 14px; }
.preview-body h4 { font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px; }
.preview-meta { display: flex; gap: 12px; font-size: 12px; color: var(--text-muted); margin-bottom: 8px; }
.preview-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 12px; }
.rsvp-preview-btn {
  width: 100%;
  padding: 10px;
  background: var(--navy);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--font-body);
}

.reset-link {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--navy);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
}
</style>
