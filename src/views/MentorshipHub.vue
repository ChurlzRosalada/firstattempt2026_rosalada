<template>
  <div class="page-content">
    <div class="page-header-row">
      <div><h1 class="page-title">Mentorship Hub</h1><p class="page-subtitle">Connect with experienced alumni mentors in your field.</p></div>
      <button class="btn-primary" @click="$router.push('/mentorship/request')">Request Mentorship</button>
    </div>

    <div class="mentorship-layout">
      <div class="mentorship-main">
        <div class="card" style="margin-bottom:16px;padding:14px 18px;">
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
            <div class="search-bar" style="flex:1;min-width:200px;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Search mentors by name, skill, or industry..." />
            </div>
            <div class="filter-chips">
              <div class="filter-chip filled">✓ Open to Mentor</div>
              <div class="filter-chip">Industry ▾</div>
              <div class="filter-chip">Location ▾</div>
              <div class="filter-chip">Batch ▾</div>
            </div>
          </div>
        </div>

        <h2 class="section-title">Recommended for You</h2>
        <div class="mentor-grid stagger">
          <div v-for="m in recommended" :key="m.id" class="mentor-card card">
            <div class="mc-top">
              <div class="avatar" :style="`width:52px;height:52px;font-size:17px;background:${m.avatarColor};`">{{ m.initials }}</div>
              <div class="mc-info">
                <h3>{{ m.name }}</h3>
                <p class="mc-role">{{ m.role }}</p>
                <span class="match-tag">{{ m.match }} Match</span>
              </div>
              <button class="bookmark-btn"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></button>
            </div>
            <div class="mc-tags">
              <span v-for="tag in m.tags" :key="tag" class="chip">{{ tag }}</span>
            </div>
            <p class="mc-edu">🎓 {{ m.edu }}</p>
            <button class="btn-primary" style="width:100%;padding:9px;" @click="$router.push('/mentorship/request')">Connect</button>
          </div>
        </div>

        <h2 class="section-title" style="margin-top:24px;">Recently Active</h2>
        <div class="recent-grid stagger">
          <div v-for="r in recentlyActive" :key="r.name" class="recent-card card">
            <div class="avatar" :style="`width:44px;height:44px;font-size:15px;background:${r.color};`">{{ r.initials }}</div>
            <div class="recent-info">
              <p class="recent-name">{{ r.name }}</p>
              <p class="recent-role">{{ r.role }}</p>
            </div>
            <button class="btn-ghost" style="padding:6px 12px;font-size:12px;" @click="$router.push('/mentorship/request')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
              Connect
            </button>
          </div>
        </div>
      </div>

      <div class="mentorship-sidebar">
        <div class="card" style="margin-bottom:16px;">
          <h3 class="section-title">Explore by Industry</h3>
          <div class="industry-list">
            <div v-for="ind in industries" :key="ind.label" class="industry-row" :style="{ background: ind.color }">
              <span>{{ ind.label }}</span>
              <span class="ind-count">{{ ind.count }} mentors</span>
            </div>
          </div>
        </div>
        <div class="card">
          <h3 class="section-title">My Connections</h3>
          <div v-for="c in myConnections" :key="c.name" class="conn-row">
            <div class="avatar" :style="`width:34px;height:34px;font-size:11px;background:${c.color};`">{{ c.initials }}</div>
            <div style="flex:1;">
              <p style="font-size:13px;font-weight:600;color:var(--text-primary);">{{ c.name }}</p>
              <p style="font-size:11px;color:var(--text-muted);">{{ c.status }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const recommended = [
  { id: 1, name: 'Sarah Jenkins', initials: 'SJ', avatarColor: '#e8937a', role: 'Senior Product Manager at Google', match: '98%', tags: ['Product Strategy', 'UX Research', 'Leadership'], edu: "BS CS '16" },
  { id: 2, name: 'Michael Chen', initials: 'MC', avatarColor: '#4a7fa5', role: 'Director of Engineering at Stripe', match: '95%', tags: ['System Design', 'Scalability', 'FinTech'], edu: "BS IT '12" },
  { id: 3, name: 'Emily Rodriguez', initials: 'ER', avatarColor: '#6b9e6b', role: 'Senior Data Scientist at Uber', match: '91%', tags: ['Machine Learning', 'Python', 'Analytics'], edu: "MS CS '18" },
]
const recentlyActive = [
  { name: 'Emily Zhang', initials: 'EZ', role: 'Marketing Lead at Spotify', color: '#6b9e6b' },
  { name: 'David Kim', initials: 'DK', role: 'Founder at Stealth Startup', color: '#8b7fad' },
  { name: 'Lisa Wong', initials: 'LW', role: 'Senior Data Scientist at Uber', color: '#c9a84c' },
  { name: 'James Park', initials: 'JP', role: 'Software Engineer at Meta', color: '#2a4f8f' },
]
const industries = [
  { label: 'Technology', count: 340, color: 'linear-gradient(135deg,#1a3a6b,#2a6fd4)' },
  { label: 'Finance', count: 210, color: 'linear-gradient(135deg,#c9a84c,#e6b84c)' },
  { label: 'Healthcare', count: 145, color: 'linear-gradient(135deg,#4a7fa5,#6b9ea5)' },
  { label: 'Creative Arts', count: 88, color: 'linear-gradient(135deg,#e8937a,#c96b50)' },
]
const myConnections = [
  { name: 'Sarah Jenkins', initials: 'SJ', color: '#e8937a', status: 'Pending acceptance' },
]
</script>

<style scoped>
.page-header-row { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }
.mentorship-layout { display: grid; grid-template-columns: 1fr 280px; gap: 24px; align-items: start; }
.mentorship-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; }

.mentor-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.mentor-card { display: flex; flex-direction: column; gap: 10px; }
.mc-top { display: flex; align-items: flex-start; gap: 10px; }
.mc-info { flex: 1; }
.mc-info h3 { font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 2px; }
.mc-role { font-size: 12px; color: var(--text-secondary); margin-bottom: 5px; }
.match-tag { background: #fef3c7; color: #d97706; font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 10px; }
.bookmark-btn { background: none; border: none; cursor: pointer; color: var(--text-muted); padding: 2px; }
.mc-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.mc-edu { font-size: 11px; color: var(--text-muted); }

.recent-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.recent-card { display: flex; align-items: center; gap: 10px; }
.recent-info { flex: 1; }
.recent-name { font-size: 13px; font-weight: 600; color: var(--text-primary); }
.recent-role { font-size: 11px; color: var(--text-muted); }

.industry-list { display: flex; flex-direction: column; gap: 8px; }
.industry-row { border-radius: 8px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; }
.industry-row span { font-size: 13px; font-weight: 600; color: white; }
.ind-count { font-size: 11px; color: rgba(255,255,255,0.7); }

.conn-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--border); }
.conn-row:last-child { border-bottom: none; }
</style>
