<template>
  <div class="page-content home-page">
    <!-- Welcome banner -->
    <div class="welcome-banner fade-up">
      <div class="welcome-text">
        <h1 class="page-title">Welcome back, Alex Morgan 👋</h1>
        <p class="page-subtitle">Here's what's happening in the AdDU alumni community today.</p>
      </div>
      <div class="welcome-actions">
        <button class="btn-secondary" @click="$router.push('/mentorship')">Find a Mentor</button>
        <button class="btn-primary" @click="$router.push('/events')">Browse Events</button>
      </div>
    </div>

    <!-- Stats Row -->
    <div class="stats-grid">
      <div class="stat-card fade-up" v-for="s in stats" :key="s.label">
        <div class="stat-icon" :style="{ background: s.bg }">
          <span v-html="s.icon"></span>
        </div>
        <div class="stat-label">{{ s.label }}</div>
        <div class="stat-value">{{ s.value }}</div>
        <div class="stat-change">{{ s.change }}</div>
      </div>
    </div>

    <!-- Main 2-column layout -->
    <div class="home-grid">
      <!-- LEFT: Feed + Quick Actions -->
      <div class="home-left">
        <!-- Quick Actions -->
        <div class="card quick-actions-card">
          <h2 class="section-title">Quick Actions</h2>
          <div class="quick-grid">
            <div v-for="qa in quickActions" :key="qa.label" class="qa-item" @click="$router.push(qa.route)">
              <div class="qa-icon" :style="{ background: qa.bg }">
                <span v-html="qa.icon"></span>
              </div>
              <span class="qa-label">{{ qa.label }}</span>
            </div>
          </div>
        </div>

        <!-- Blue Knight Feed -->
        <div class="feed-section">
          <div class="feed-header-row">
            <h2 class="section-title" style="margin-bottom:0">Blue Knight Feed</h2>
            <div class="feed-filters">
              <button v-for="f in feedFilters" :key="f" class="feed-filter-btn" :class="{ active: activeFilter === f }" @click="activeFilter = f">{{ f }}</button>
            </div>
          </div>

          <div class="feed stagger">
            <div v-for="post in posts" :key="post.id" class="feed-card card">
              <div class="feed-top">
                <div class="avatar" :style="`width:42px;height:42px;font-size:15px;background:${post.avatarColor};`">{{ post.initials }}</div>
                <div class="feed-meta">
                  <div class="feed-name-row">
                    <strong>{{ post.name }}</strong>
                    <span v-if="post.verified" class="verified-badge">✓</span>
                    <span class="feed-time">· {{ post.time }}</span>
                  </div>
                  <p class="feed-role">{{ post.role }}</p>
                </div>
                <button class="more-btn">···</button>
              </div>
              <p class="feed-text">{{ post.text }}</p>
              <div v-if="post.image" class="feed-image" :style="{ background: post.image }"></div>
              <div v-if="post.cta" class="feed-cta">
                <button class="btn-primary" style="font-size:13px;padding:9px 18px;">{{ post.cta }}</button>
              </div>
              <div class="feed-actions">
                <button class="feed-action">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  {{ post.likes }} Likes
                </button>
                <button class="feed-action">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  {{ post.comments }} Comments
                </button>
                <button class="feed-action">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Events + Mentors -->
      <div class="home-right">
        <!-- Featured Events -->
        <div class="card right-card">
          <div class="right-card-header">
            <h2 class="section-title" style="margin-bottom:0">Featured Events</h2>
            <router-link to="/events" class="see-all">See All →</router-link>
          </div>
          <div class="event-list stagger">
            <div v-for="ev in featuredEvents" :key="ev.id" class="event-row" @click="$router.push('/events/1')">
              <div class="ev-date-pill" :style="{ background: ev.color }">
                <span class="ev-month">{{ ev.month }}</span>
                <span class="ev-day">{{ ev.day }}</span>
              </div>
              <div class="ev-info">
                <p class="ev-name">{{ ev.name }}</p>
                <p class="ev-venue">{{ ev.label }}</p>
              </div>
              <div class="ev-attendees">
                <div class="avatar-stack">
                  <div class="avatar" style="width:20px;height:20px;font-size:8px;background:#2a4f8f;">A</div>
                  <div class="avatar" style="width:20px;height:20px;font-size:8px;background:#e8937a;">B</div>
                </div>
                <span>+{{ ev.count }}</span>
              </div>
            </div>
          </div>
          <button class="btn-ghost w-full" style="width:100%;justify-content:center;margin-top:12px;" @click="$router.push('/calendar')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            View My Calendar
          </button>
        </div>

        <!-- Mentor Suggestions -->
        <div class="card right-card">
          <div class="right-card-header">
            <h2 class="section-title" style="margin-bottom:0">Suggested Mentors</h2>
            <router-link to="/mentorship" class="see-all">See All →</router-link>
          </div>
          <div class="mentor-list stagger">
            <div v-for="m in mentors" :key="m.name" class="mentor-row">
              <div class="avatar" :style="`width:40px;height:40px;font-size:14px;background:${m.color};`">{{ m.initials }}</div>
              <div class="mentor-info">
                <p class="mentor-name">{{ m.name }}</p>
                <p class="mentor-role">{{ m.role }}</p>
              </div>
              <span class="match-tag">{{ m.match }}</span>
              <button class="btn-ghost" style="padding:5px 10px;font-size:12px;" @click="$router.push('/mentorship/request')">Connect</button>
            </div>
          </div>
        </div>

        <!-- Alumni Directory teaser -->
        <div class="card right-card directory-teaser">
          <div class="right-card-header">
            <h2 class="section-title" style="margin-bottom:0">Alumni Network</h2>
            <router-link to="/directory" class="see-all">Browse →</router-link>
          </div>
          <p style="font-size:13px;color:var(--text-secondary);margin-bottom:14px;">Connect with 12,400+ verified Blue Knights worldwide.</p>
          <div class="alumni-preview stagger">
            <div v-for="a in alumniPreview" :key="a.name" class="alumni-mini">
              <div class="avatar" :style="`width:36px;height:36px;font-size:12px;background:${a.color};`">{{ a.initials }}</div>
              <div>
                <p style="font-size:13px;font-weight:600;color:var(--text-primary);">{{ a.name }}</p>
                <p style="font-size:11px;color:var(--text-muted);">{{ a.company }}</p>
              </div>
              <button class="btn-ghost" style="padding:4px 10px;font-size:12px;margin-left:auto;" @click="$router.push('/directory')">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeFilter = ref('All')
const feedFilters = ['All', 'Announcements', 'Jobs', 'Events']

const stats = [
  { label: 'Alumni Network', value: '12,400', change: '+84 this month', bg: '#eef2ff', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>' },
  { label: 'Upcoming Events', value: '8', change: '3 this week', bg: '#fef3c7', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' },
  { label: 'Mentor Matches', value: '5', change: '98% match found', bg: '#dcfce7', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>' },
  { label: 'Blue Points', value: '340', change: '+100 from check-in', bg: '#fce7f3', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
]

const quickActions = [
  { label: 'Document Request', route: '/profile', bg: '#eef2ff', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
  { label: 'Networking', route: '/events', bg: '#fef3c7', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>' },
  { label: 'Donation', route: '/home', bg: '#fce7f3', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
  { label: 'Job Posting', route: '/directory', bg: '#dcfce7', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>' },
]

const posts = [
  { id: 1, name: 'Ateneo de Davao', initials: 'AD', avatarColor: '#1a3a6b', verified: true, role: 'Official Account', time: '4 hours ago', text: 'We are proud to announce that AdDU has been ranked #1 in Innovation for the third consecutive year! 🎉 This achievement reflects the hard work of our students and faculty. #AdDU #BlueKnights', image: 'linear-gradient(135deg,#1a3a6b 0%,#2a6fd4 100%)', likes: 245, comments: 42 },
  { id: 2, name: 'John Doe', initials: 'JD', avatarColor: '#2a4f8f', verified: false, role: 'BS Computer Science \'20', time: 'Just now', text: 'Looking for mentorship opportunities in the Fintech space here in Davao. If anyone is available for a quick coffee chat downtown next week, let me know! #Networking', image: null, likes: 17, comments: 8 },
  { id: 3, name: 'Homecoming Registration', initials: 'HR', avatarColor: '#c9a84c', verified: false, role: 'AdDU Alumni Office', time: '1 day ago', text: 'Registration is closing soon for the Grand Alumni Homecoming weekend! Don\'t miss out on the early bird pricing.', image: null, cta: 'Register Now', likes: 0, comments: 0 },
]

const featuredEvents = [
  { id: 1, month: 'OCT', day: '24', label: 'Grand Hall, Main Campus', name: 'Annual AdDU Gala', color: 'linear-gradient(135deg,#1a3a6b,#2a6fd4)', count: 142 },
  { id: 2, month: 'NOV', day: '8', label: 'Innovation Hub', name: 'Blue Knights Summit', color: 'linear-gradient(135deg,#c9a84c,#e6b84c)', count: 38 },
  { id: 3, month: 'NOV', day: '18', label: 'The Shard, London', name: 'Global Alumni Meetup', color: 'linear-gradient(135deg,#4a7fa5,#6b9ea5)', count: 21 },
]

const mentors = [
  { name: 'Sarah Jenkins', initials: 'SJ', role: 'Sr. UX Designer · Adobe', color: '#e8937a', match: '98%' },
  { name: 'Michael Chen', initials: 'MC', role: 'Product Manager · Google', color: '#4a7fa5', match: '95%' },
  { name: 'Emily Rodriguez', initials: 'ER', role: 'Software Engineer · Spotify', color: '#6b9e6b', match: '91%' },
]

const alumniPreview = [
  { name: 'David Kim', initials: 'DK', company: 'Founder · Stealth Startup', color: '#8b7fad' },
  { name: 'Lisa Wong', initials: 'LW', company: 'Data Scientist · Uber', color: '#c9a84c' },
  { name: 'James Park', initials: 'JP', company: 'Engineer · Meta', color: '#2a4f8f' },
]
</script>

<style scoped>
.home-page { background: var(--bg); }

.welcome-banner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 20px;
}

.welcome-actions { display: flex; gap: 10px; flex-shrink: 0; padding-top: 4px; }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}

.stat-card {
  background: white;
  border-radius: var(--radius);
  padding: 18px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.stat-label { font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
.stat-value { font-size: 26px; font-weight: 700; color: var(--navy); line-height: 1; }
.stat-change { font-size: 11px; color: var(--success); }

/* 2 col layout */
.home-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  align-items: start;
}

.home-left { display: flex; flex-direction: column; gap: 20px; }
.home-right { display: flex; flex-direction: column; gap: 20px; position: sticky; top: 80px; }

/* Quick actions */
.quick-actions-card { }
.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.qa-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 14px 8px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: all 0.15s;
}

.qa-item:hover { border-color: var(--navy); background: #f8faff; transform: translateY(-2px); box-shadow: var(--shadow-md); }
.qa-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.qa-label { font-size: 12px; font-weight: 500; color: var(--text-secondary); text-align: center; line-height: 1.3; }

/* Feed */
.feed-header-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.feed-filters { display: flex; gap: 4px; }
.feed-filter-btn { padding: 5px 12px; border: none; background: none; font-family: var(--font-body); font-size: 12px; font-weight: 500; color: var(--text-muted); cursor: pointer; border-radius: 6px; transition: all 0.15s; }
.feed-filter-btn.active { background: var(--navy); color: white; }
.feed-filter-btn:hover:not(.active) { background: var(--bg); color: var(--navy); }

.feed { display: flex; flex-direction: column; gap: 16px; }
.feed-card {}
.feed-top { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.feed-meta { flex: 1; }
.feed-name-row { display: flex; align-items: center; gap: 5px; font-size: 14px; }
.feed-name-row strong { color: var(--text-primary); }
.feed-time { font-size: 12px; color: var(--text-muted); }
.verified-badge { background: var(--navy); color: white; border-radius: 50%; width: 15px; height: 15px; display: inline-flex; align-items: center; justify-content: center; font-size: 8px; }
.feed-role { font-size: 12px; color: var(--text-muted); margin-top: 1px; }
.more-btn { background: none; border: none; cursor: pointer; font-size: 18px; color: var(--text-muted); letter-spacing: 1px; }
.feed-text { font-size: 14px; color: var(--text-primary); line-height: 1.65; margin-bottom: 12px; }
.feed-image { height: 200px; border-radius: var(--radius); margin-bottom: 12px; }
.feed-cta { margin-bottom: 12px; }
.feed-actions { display: flex; gap: 4px; border-top: 1px solid var(--border); padding-top: 12px; }
.feed-action { display: flex; align-items: center; gap: 6px; background: none; border: none; cursor: pointer; font-size: 13px; color: var(--text-muted); font-family: var(--font-body); padding: 6px 12px; border-radius: 6px; transition: all 0.15s; }
.feed-action:hover { background: var(--bg); color: var(--navy); }

/* Right panel */
.right-card { margin-bottom: 0; }
.right-card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.see-all { font-size: 13px; color: var(--navy); text-decoration: none; font-weight: 500; }

/* Events list */
.event-list { display: flex; flex-direction: column; gap: 10px; }
.event-row { display: flex; align-items: center; gap: 12px; padding: 10px; border-radius: 8px; cursor: pointer; transition: all 0.15s; }
.event-row:hover { background: var(--bg); }
.ev-date-pill { width: 42px; border-radius: 8px; padding: 6px 0; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; color: white; }
.ev-month { font-size: 9px; font-weight: 700; }
.ev-day { font-size: 17px; font-weight: 700; line-height: 1.1; }
.ev-info { flex: 1; }
.ev-name { font-size: 13px; font-weight: 600; color: var(--text-primary); }
.ev-venue { font-size: 11px; color: var(--text-muted); margin-top: 1px; }
.ev-attendees { display: flex; align-items: center; gap: 4px; }
.ev-attendees span { font-size: 11px; color: var(--text-muted); margin-left: 6px; }

/* Mentors */
.mentor-list { display: flex; flex-direction: column; gap: 10px; }
.mentor-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--border); }
.mentor-row:last-child { border-bottom: none; }
.mentor-info { flex: 1; }
.mentor-name { font-size: 13px; font-weight: 600; color: var(--text-primary); }
.mentor-role { font-size: 11px; color: var(--text-muted); }
.match-tag { font-size: 11px; font-weight: 700; color: #d97706; background: #fef3c7; padding: 2px 7px; border-radius: 8px; }

/* Alumni mini */
.alumni-preview { display: flex; flex-direction: column; gap: 8px; }
.alumni-mini { display: flex; align-items: center; gap: 10px; padding: 6px 0; border-bottom: 1px solid var(--border); }
.alumni-mini:last-child { border-bottom: none; }
</style>
