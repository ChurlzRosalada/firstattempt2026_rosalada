<template>
  <div class="page-content">
    <!-- Hero -->
    <div class="profile-hero">
      <div class="profile-cover"></div>
      <div class="profile-header-actions">
        <button class="hero-btn" @click="$router.back()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="hero-btn">⋮</button>
      </div>
      <div class="profile-avatar-wrap">
        <div class="avatar profile-avatar">AR</div>
        <div class="verified-check">✓</div>
      </div>
    </div>

    <div class="profile-content">
      <div class="profile-name-section">
        <h1>Alex Rivera</h1>
        <p class="profile-role">Senior Product Designer at TechFlow</p>
        <div class="profile-badges">
          <span class="badge badge-navy">✓ VERIFIED ALUMNUS</span>
          <span class="badge badge-gold">CLASS OF 2018</span>
        </div>
        <p class="profile-location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          San Francisco, CA
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="profile-actions">
        <button class="btn-outline-sm" style="flex:1;" @click="$router.push('/mentorship/request')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/><line x1="20" y1="8" x2="20" y2="14"/></svg>
          Connect
        </button>
        <button class="btn-filled-sm" style="flex:1;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Message
        </button>
      </div>

      <!-- Mutual Connections -->
      <div class="mutual-connections card">
        <div class="avatar-stack">
          <div class="avatar" style="width:24px;height:24px;font-size:9px;background:#e8937a;border:2px solid white;">SJ</div>
          <div class="avatar" style="width:24px;height:24px;font-size:9px;background:#4a7fa5;border:2px solid white;">MC</div>
          <div class="avatar" style="width:24px;height:24px;font-size:9px;background:#6b9e6b;border:2px solid white;">ER</div>
          <div class="avatar" style="width:24px;height:24px;font-size:9px;background:#8b7fad;border:2px solid white;">+4</div>
        </div>
        <p class="mutual-text">6 mutual connections including Sarah Jenkins...</p>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      </div>

      <!-- About -->
      <div class="profile-section">
        <h2 class="section-title">About</h2>
        <p class="about-text">Passionate product designer with over 5 years of experience in fintech and consumer apps. I love solving complex user problems and turning them into simple, elegant interfaces. Currently leading the design system at TechFlow. Always happy to mentor junior designers from AdDU!</p>
      </div>

      <!-- Experience -->
      <div class="profile-section">
        <h2 class="section-title">Experience</h2>
        <div class="exp-list">
          <div v-for="exp in experience" :key="exp.company" class="exp-item">
            <div class="exp-dot" :style="{ background: exp.color }"></div>
            <div class="exp-info">
              <div class="exp-title-row">
                <h4>{{ exp.title }}</h4>
                <span class="exp-tenure">{{ exp.tenure }}</span>
              </div>
              <p class="exp-company">{{ exp.company }}</p>
              <p class="exp-desc">{{ exp.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="profile-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-list">
          <div v-for="edu in education" :key="edu.degree" class="edu-item">
            <div class="edu-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <div>
              <p class="edu-school">{{ edu.school }}</p>
              <p class="edu-degree">{{ edu.degree }}</p>
              <p class="edu-years">{{ edu.years }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="profile-section" style="padding-bottom: 24px;">
        <h2 class="section-title">Skills & Interests</h2>
        <div class="skills-wrap">
          <span v-for="skill in skills" :key="skill" class="chip">{{ skill }}</span>
        </div>
      </div>
    </div>

    <!-- Settings link -->
    <div class="profile-settings-link" @click="$router.push('/notifications')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      Notification Settings
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </div>
  </div>
</template>

<script setup>
const experience = [
  { title: 'Senior Product Designer', company: 'TechFlow', tenure: '2022 – Present', desc: 'Leading the design system initiative and core product features for the enterprise dashboard.', color: '#1a3a6b' },
  { title: 'UX Designer', company: 'StartUp Inc.', tenure: '2019 – 2022', desc: 'Designed the initial MVP for the mobile application and conducted user research sessions.', color: '#c9a84c' },
]
const education = [
  { school: 'Ateneo de Davao University', degree: 'Master of Business Administration (MBA)', years: '2020 – 2022' },
  { school: 'Ateneo de Davao University', degree: 'B.S. Computer Science', years: '2014 – 2018' },
]
const skills = ['Product Design', 'UX Research', 'Figma', 'Prototyping', 'Design Systems', 'Mentorship']
</script>

<style scoped>
.profile-page { background: var(--bg); }

.profile-hero { position: relative; margin-bottom: 60px; }
.profile-cover { height: 140px; background: linear-gradient(135deg, #1a3a6b 0%, #2a6fd4 100%); }
.profile-header-actions {
  position: absolute;
  top: 52px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
}
.hero-btn {
  background: rgba(255,255,255,0.2);
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 18px;
  backdrop-filter: blur(4px);
}

.profile-avatar-wrap {
  position: absolute;
  bottom: -48px;
  left: 20px;
}
.profile-avatar {
  width: 80px;
  height: 80px;
  font-size: 26px;
  font-weight: 700;
  background: var(--navy);
  border: 3px solid white;
  box-shadow: var(--shadow-md);
}
.verified-check {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--success);
  color: white;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}

.profile-content { padding: 0 20px; }
.profile-name-section { margin-bottom: 16px; }
.profile-name-section h1 { font-family: var(--font-display); font-size: 22px; color: var(--text-primary); }
.profile-role { font-size: 14px; color: var(--text-secondary); margin: 4px 0; }
.profile-badges { display: flex; gap: 6px; flex-wrap: wrap; margin: 8px 0; }
.profile-location { display: flex; align-items: center; gap: 5px; font-size: 13px; color: var(--text-muted); }

.profile-actions { display: flex; gap: 10px; margin-bottom: 14px; }

.mutual-connections {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.avatar-stack { display: flex; }
.avatar-stack .avatar { margin-right: -6px; }
.mutual-text { flex: 1; font-size: 13px; color: var(--text-secondary); }

.profile-section { margin-bottom: 20px; }
.about-text { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }

.exp-list { display: flex; flex-direction: column; gap: 16px; }
.exp-item { display: flex; gap: 12px; }
.exp-dot { width: 12px; height: 12px; border-radius: 50%; margin-top: 4px; flex-shrink: 0; }
.exp-info { flex: 1; }
.exp-title-row { display: flex; align-items: center; justify-content: space-between; }
.exp-title-row h4 { font-size: 14px; font-weight: 600; color: var(--text-primary); }
.exp-tenure { font-size: 11px; color: var(--text-muted); }
.exp-company { font-size: 13px; color: var(--text-secondary); margin: 2px 0; }
.exp-desc { font-size: 12px; color: var(--text-muted); line-height: 1.5; }

.edu-list { display: flex; flex-direction: column; gap: 12px; }
.edu-item { display: flex; gap: 12px; align-items: flex-start; }
.edu-icon { width: 36px; height: 36px; background: #eef2ff; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.edu-school { font-size: 14px; font-weight: 600; color: var(--text-primary); }
.edu-degree { font-size: 12px; color: var(--text-secondary); }
.edu-years { font-size: 11px; color: var(--text-muted); }

.skills-wrap { display: flex; flex-wrap: wrap; gap: 8px; }

.profile-settings-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  background: white;
  border-top: 1px solid var(--border);
  font-size: 14px;
  color: var(--text-primary);
  cursor: pointer;
  margin-top: 8px;
}
.profile-settings-link svg:first-child { color: var(--navy); }
.profile-settings-link svg:last-child { margin-left: auto; color: var(--text-muted); }
</style>
