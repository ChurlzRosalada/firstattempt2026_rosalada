<template>
  <div class="mentorship-page page">
    <div class="page-header">
      <button class="back-btn" @click="$router.push('/directory')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div>
        <h1>Mentorship Hub</h1>
        <p class="header-sub">Ateneo de Davao University</p>
      </div>
      <button class="search-icon-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
    </div>

    <div class="mentorship-content">
      <!-- Filters -->
      <div class="filter-chips" style="padding: 12px 0 0;">
        <div class="filter-chip active open-chip">✓ Open to Mentor</div>
        <div class="filter-chip">Industry ▾</div>
        <div class="filter-chip">Location ▾</div>
      </div>

      <!-- Recommended -->
      <section style="margin-top: 20px;">
        <div class="section-row">
          <h2 class="section-title">Recommended for You</h2>
          <a href="#" class="see-all">See All</a>
        </div>
        <div class="mentor-cards stagger">
          <div v-for="m in recommended" :key="m.id" class="mentor-card card">
            <button class="bookmark-btn-abs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </button>
            <div class="mentor-top">
              <div class="avatar" :style="`width:48px;height:48px;font-size:16px;background:${m.avatarColor};position:relative;`">
                {{ m.initials }}
                <span class="mentor-badge">{{ m.badge }}</span>
              </div>
              <div class="mentor-info">
                <h3>{{ m.name }}</h3>
                <p class="mentor-role">{{ m.role }}</p>
                <div class="match-row">
                  <span class="match-badge">{{ m.match }} Match</span>
                </div>
              </div>
            </div>
            <div class="mentor-tags">
              <span v-for="tag in m.tags" :key="tag" class="chip">{{ tag }}</span>
            </div>
            <div class="mentor-footer">
              <span class="mentor-edu">🎓 {{ m.edu }}</span>
              <button class="btn-filled-sm" @click="$router.push('/mentorship/request')">Connect</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Recently Active -->
      <section style="margin-top: 20px;">
        <h2 class="section-title">Recently Active</h2>
        <div class="recent-list">
          <div v-for="r in recentlyActive" :key="r.name" class="recent-item">
            <div class="avatar" :style="`width:42px;height:42px;font-size:14px;background:${r.color};`">{{ r.initials }}</div>
            <div class="recent-info">
              <p class="recent-name">{{ r.name }}</p>
              <p class="recent-role">{{ r.role }}</p>
            </div>
            <button class="add-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Explore by Industry -->
      <section style="margin-top: 20px; padding-bottom: 20px;">
        <h2 class="section-title">Explore by Industry</h2>
        <div class="industry-grid">
          <div v-for="ind in industries" :key="ind.label" class="industry-card" :style="{ background: ind.color }">
            <span>{{ ind.label }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const recommended = [
  { id: 1, name: 'Sarah Jenkins', initials: 'SJ', avatarColor: '#e8937a', badge: '🏅', role: 'Senior Product Manager at Google', match: '98%', tags: ['Product Strategy', 'UX Research', 'Leadership'], edu: 'BS CS \'16' },
  { id: 2, name: 'Michael Chen', initials: 'MC', avatarColor: '#4a7fa5', badge: '⭐', role: 'Director of Engineering at Stripe', match: '95%', tags: ['System Design', 'Scalability', 'FinTech'], edu: 'BS IT \'12' },
]

const recentlyActive = [
  { name: 'Emily Zhang', initials: 'EZ', role: 'Marketing Lead at Spotify', color: '#6b9e6b' },
  { name: 'David Kim', initials: 'DK', role: 'Founder at Stealth Startup', color: '#8b7fad' },
  { name: 'Lisa Wong', initials: 'LW', role: 'Senior Data Scientist at Uber', color: '#c9a84c' },
]

const industries = [
  { label: 'Technology', color: 'linear-gradient(135deg,#1a3a6b,#2a6fd4)' },
  { label: 'Finance', color: 'linear-gradient(135deg,#c9a84c,#e6b84c)' },
  { label: 'Healthcare', color: 'linear-gradient(135deg,#4a7fa5,#6b9ea5)' },
  { label: 'Creative Arts', color: 'linear-gradient(135deg,#e8937a,#c96b50)' },
]
</script>

<style scoped>
.mentorship-page { background: var(--bg); }
.mentorship-content { padding: 0 20px; }
.header-sub { font-size: 11px; color: var(--text-muted); }
.search-icon-btn { background: none; border: none; cursor: pointer; color: var(--navy); }
.section-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.see-all { font-size: 13px; color: var(--navy); text-decoration: none; font-weight: 500; }

.filter-chips { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; }
.filter-chip { flex-shrink: 0; padding: 6px 14px; background: white; border: 1.5px solid var(--border); border-radius: 20px; font-size: 12px; font-weight: 500; cursor: pointer; }
.filter-chip.active.open-chip { background: var(--navy); color: white; border-color: var(--navy); }

.mentor-cards { display: flex; flex-direction: column; gap: 12px; }
.mentor-card { position: relative; }
.bookmark-btn-abs { position: absolute; top: 14px; right: 14px; background: none; border: none; cursor: pointer; color: var(--text-muted); }
.mentor-top { display: flex; gap: 12px; margin-bottom: 10px; }
.mentor-info { flex: 1; }
.mentor-info h3 { font-size: 15px; font-weight: 600; color: var(--text-primary); margin-bottom: 3px; }
.mentor-role { font-size: 12px; color: var(--text-secondary); margin-bottom: 5px; }
.mentor-badge { position: absolute; bottom: -2px; right: -2px; font-size: 14px; }
.match-row { display: flex; align-items: center; gap: 6px; }
.match-badge { background: #fef3c7; color: #d97706; font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 10px; }
.mentor-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.mentor-footer { display: flex; align-items: center; justify-content: space-between; }
.mentor-edu { font-size: 11px; color: var(--text-muted); }

.recent-list { display: flex; flex-direction: column; gap: 2px; }
.recent-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border); }
.recent-item:last-child { border-bottom: none; }
.recent-info { flex: 1; }
.recent-name { font-size: 14px; font-weight: 500; color: var(--text-primary); }
.recent-role { font-size: 12px; color: var(--text-muted); }
.add-btn { background: none; border: none; cursor: pointer; color: var(--navy); }

.industry-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.industry-card {
  height: 90px;
  border-radius: var(--radius);
  display: flex;
  align-items: flex-end;
  padding: 12px;
  cursor: pointer;
}
.industry-card span { font-size: 13px; font-weight: 600; color: white; }
</style>
