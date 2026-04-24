<template>
  <div class="page-content">
    <div class="page-header">
      <button class="back-btn" @click="$router.back()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <h1>Request Mentorship</h1>
      <div style="width:28px;"></div>
    </div>

    <div class="request-content">
      <div class="school-banner">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        ATENEO DE DAVAO ALUMNI
      </div>

      <div class="mentor-profile-card card">
        <div class="avatar" style="width:64px;height:64px;font-size:22px;background:#e8937a;">SJ</div>
        <div>
          <h2>Sarah Jenkins</h2>
          <p class="mentor-title">Senior Product Manager</p>
          <p class="mentor-detail">Marketing • Class of 2010</p>
        </div>
      </div>

      <div class="availability-box">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <div>
          <p class="avail-label">AVAILABILITY</p>
          <p class="avail-text">Usually responds within 2 days</p>
        </div>
      </div>

      <div class="intro-section">
        <h3>Warm Introduction</h3>
        <p class="intro-desc">Introduce yourself and explain why you're interested in mentorship. As a fellow Atenean, a personalized message helps build a strong connection.</p>

        <div class="form-group" style="margin-top: 16px;">
          <div class="label-row">
            <label>Your Message</label>
            <span class="char-count">Max 500 chars</span>
          </div>
          <textarea v-model="message" class="form-input" style="height:120px;resize:none;" :maxlength="500" placeholder="Hi Sarah Jenkins, I'm a recent AdDU grad interested in your work..."></textarea>
        </div>

        <div class="topics-section">
          <p class="topics-label">QUICK TOPICS</p>
          <div class="topics-row">
            <button v-for="t in topics" :key="t" class="topic-chip" :class="{ selected: selectedTopics.includes(t) }" @click="toggleTopic(t)">{{ t }}</button>
          </div>
        </div>

        <div class="focus-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <div>
            <p class="focus-title">Mentor's Focus Areas</p>
            <p class="focus-text">Sarah Jenkins specializes in <strong>Product Strategy</strong> and <strong>UX Research</strong>.</p>
          </div>
        </div>
      </div>

      <button class="btn-primary" @click="handleSend" style="margin-top: 16px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Send Request
      </button>
      <p class="tos-note">By sending, you agree to the AdDU Alumni Mentorship Guidelines.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const message = ref('')
const topics = ['Research Advice', 'Career Pivot', 'Resume Review']
const selectedTopics = ref([])
const toggleTopic = (t) => {
  const i = selectedTopics.value.indexOf(t)
  if (i > -1) selectedTopics.value.splice(i, 1)
  else selectedTopics.value.push(t)
}
const handleSend = () => router.push('/mentorship')
</script>

<style scoped>
.request-content { padding: 16px 20px 24px; }

.school-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: #f0f4ff;
  border-radius: var(--radius);
  padding: 8px;
  font-size: 11px;
  font-weight: 700;
  color: var(--navy);
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.mentor-profile-card {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 12px;
}
.mentor-profile-card h2 { font-size: 17px; font-weight: 700; color: var(--text-primary); }
.mentor-title { font-size: 13px; color: var(--text-secondary); }
.mentor-detail { font-size: 12px; color: var(--text-muted); }

.availability-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8faff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px;
  margin-bottom: 20px;
}
.avail-label { font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.5px; }
.avail-text { font-size: 13px; color: var(--text-primary); }

.intro-section h3 { font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px; }
.intro-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.5; }

.label-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.char-count { font-size: 11px; color: var(--text-muted); }

.topics-section { margin-top: 16px; }
.topics-label { font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.5px; margin-bottom: 8px; }
.topics-row { display: flex; flex-wrap: wrap; gap: 8px; }
.topic-chip {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border: 1.5px solid var(--border);
  background: white;
  color: var(--text-primary);
  font-family: var(--font-body);
  transition: all 0.2s;
}
.topic-chip.selected { background: var(--navy); color: white; border-color: var(--navy); }

.focus-box {
  display: flex;
  gap: 10px;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: var(--radius);
  padding: 12px;
  margin-top: 16px;
}
.focus-title { font-size: 12px; font-weight: 700; color: #92400e; margin-bottom: 4px; }
.focus-text { font-size: 12px; color: #78350f; line-height: 1.4; }

.tos-note { text-align: center; font-size: 11px; color: var(--text-muted); margin-top: 10px; }
</style>
