<template>
  <div class="home-page page">
    <!-- Header -->
    <div class="home-header">
      <div class="home-header-left">
        <div class="avatar" style="width:40px;height:40px;font-size:15px;background:var(--navy);">AM</div>
        <div>
          <p class="welcome-text">Welcome back,</p>
          <p class="user-name">Alex Morgan</p>
        </div>
      </div>
      <button class="notif-btn" @click="$router.push('/notifications')">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        <span class="notif-dot"></span>
      </button>
    </div>

    <!-- Featured Events -->
    <section class="section-pad">
      <div class="section-row">
        <h2 class="section-title">Featured Events</h2>
        <router-link to="/events" class="see-all">See All</router-link>
      </div>
      <div class="events-scroll">
        <div v-for="ev in featuredEvents" :key="ev.id" class="event-card-h" @click="$router.push('/events/1')">
          <div class="event-card-img" :style="{ background: ev.color }">
            <div class="event-date-badge"><span class="ed-month">{{ ev.month }}</span><span class="ed-day">{{ ev.day }}</span></div>
          </div>
          <p class="event-card-label">{{ ev.label }}</p>
          <p class="event-card-name">{{ ev.name }}</p>
          <div class="event-attendees">
            <div class="avatar-stack">
              <div class="avatar" style="width:20px;height:20px;font-size:8px;background:#2a4f8f;">A</div>
              <div class="avatar" style="width:20px;height:20px;font-size:8px;background:#3b6fc1;">B</div>
              <div class="avatar" style="width:20px;height:20px;font-size:8px;background:#c9a84c;">C</div>
            </div>
            <span>+{{ ev.count }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions -->
    <section class="section-pad">
      <div class="quick-actions">
        <div v-for="qa in quickActions" :key="qa.label" class="qa-item" @click="$router.push(qa.route)">
          <div class="qa-icon">
            <span v-html="qa.icon"></span>
          </div>
          <span class="qa-label">{{ qa.label }}</span>
        </div>
      </div>
    </section>

    <!-- Blue Knight Feed -->
    <section class="section-pad">
      <h2 class="section-title">Blue Knight Feed</h2>
      <div class="feed stagger">
        <div v-for="post in posts" :key="post.id" class="feed-card card">
          <div class="feed-header">
            <div class="avatar" :style="`width:38px;height:38px;font-size:14px;background:${post.avatarColor};`">{{ post.initials }}</div>
            <div class="feed-meta">
              <div class="feed-name-row">
                <strong>{{ post.name }}</strong>
                <span v-if="post.verified" class="verified-badge">✓</span>
              </div>
              <p class="feed-time">{{ post.time }}</p>
            </div>
            <button class="more-btn">···</button>
          </div>
          <p class="feed-text">{{ post.text }}</p>
          <div v-if="post.image" class="feed-image" :style="{ background: post.image }"></div>
          <div v-if="post.cta" class="feed-cta">
            <button class="btn-primary" style="width:auto;padding:10px 20px;font-size:13px;">{{ post.cta }}</button>
          </div>
          <div class="feed-actions">
            <button class="feed-action"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> {{ post.likes }}</button>
            <button class="feed-action"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> {{ post.comments }}</button>
            <button class="feed-action"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const featuredEvents = [
  { id: 1, month: 'OCT', day: '24', label: 'Grand Hall', name: 'Annual AdDU Gala', color: 'linear-gradient(135deg,#1a3a6b,#2a6fd4)', count: 142 },
  { id: 2, month: 'NOV', day: '8', label: 'Innovation Hub', name: 'Blue Knights Summit', color: 'linear-gradient(135deg,#c9a84c,#e6b84c)', count: 38 },
]

const quickActions = [
  { label: 'Document Request', route: '/profile', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
  { label: 'Networking & Events', route: '/events', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { label: 'Donation', route: '/home', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
  { label: 'Job Posting', route: '/directory', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a6b" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>' },
]

const posts = [
  { id: 1, name: 'Ateneo de Davao', initials: 'AD', avatarColor: '#1a3a6b', verified: true, time: '4 hours ago', text: 'We are proud to announce that AdDU has been ranked #1 in Innovation for the third consecutive year! 🎉 This achievement reflects the hard work of our students and faculty. #AdDU #BlueKnights', image: 'linear-gradient(135deg,#1a3a6b 0%,#2a6fd4 100%)', likes: 245, comments: 42 },
  { id: 2, name: 'John Doe', initials: 'JD', avatarColor: '#2a4f8f', verified: false, time: 'Just now', text: 'Looking for mentorship opportunities in the Fintech space here in Davao. If anyone is available for a quick coffee chat downtown next week, let me know! #Networking', image: null, likes: 17, comments: 8 },
  { id: 3, name: 'Homecoming Registration', initials: 'HR', avatarColor: '#c9a84c', verified: false, time: 'Just now', text: 'Registration is closing soon for the Grand Alumni Homecoming weekend! Don\'t miss out on the early bird pricing.', image: null, cta: 'Register Now', likes: 0, comments: 0 },
]
</script>

<style scoped>
.home-page { background: var(--bg); }

.home-header {
  background: white;
  padding: 52px 20px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 50;
}
.home-header-left { display: flex; align-items: center; gap: 12px; }
.welcome-text { font-size: 12px; color: var(--text-muted); }
.user-name { font-size: 15px; font-weight: 600; color: var(--navy); }
.notif-btn { position: relative; background: none; border: none; cursor: pointer; color: var(--navy); padding: 6px; }
.notif-dot { position: absolute; top: 6px; right: 6px; width: 8px; height: 8px; border-radius: 50%; background: #ef4444; border: 2px solid white; }

.section-pad { padding: 20px 20px 0; }
.section-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.see-all { font-size: 13px; color: var(--navy); text-decoration: none; font-weight: 500; }

.events-scroll { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none; }
.events-scroll::-webkit-scrollbar { display: none; }

.event-card-h {
  flex-shrink: 0;
  width: 140px;
  cursor: pointer;
}
.event-card-img {
  width: 100%;
  height: 90px;
  border-radius: var(--radius);
  position: relative;
  margin-bottom: 8px;
}
.event-date-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background: white;
  border-radius: 8px;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.1;
}
.ed-month { font-size: 9px; font-weight: 600; color: var(--navy); text-transform: uppercase; }
.ed-day { font-size: 16px; font-weight: 700; color: var(--navy); }
.event-card-label { font-size: 10px; color: var(--text-muted); margin-bottom: 2px; }
.event-card-name { font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px; }
.event-attendees { display: flex; align-items: center; gap: 6px; }
.avatar-stack { display: flex; }
.avatar-stack .avatar { margin-right: -5px; border: 1.5px solid white; }
.event-attendees span { font-size: 11px; color: var(--text-muted); margin-left: 8px; }

.quick-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.qa-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 8px 4px;
}
.qa-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: white;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
}
.qa-label { font-size: 10px; font-weight: 500; color: var(--text-secondary); text-align: center; line-height: 1.3; }

.feed { padding-bottom: 8px; }
.feed-card { margin-bottom: 12px; }
.feed-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.feed-meta { flex: 1; }
.feed-name-row { display: flex; align-items: center; gap: 5px; font-size: 14px; }
.feed-name-row strong { color: var(--text-primary); }
.verified-badge { color: white; background: var(--navy); border-radius: 50%; width: 14px; height: 14px; display: inline-flex; align-items: center; justify-content: center; font-size: 8px; }
.feed-time { font-size: 11px; color: var(--text-muted); margin-top: 1px; }
.more-btn { background: none; border: none; cursor: pointer; font-size: 18px; color: var(--text-muted); letter-spacing: 1px; }
.feed-text { font-size: 13px; color: var(--text-primary); line-height: 1.6; margin-bottom: 10px; }
.feed-image { height: 160px; border-radius: var(--radius); margin-bottom: 10px; }
.feed-cta { margin-bottom: 10px; }
.feed-actions { display: flex; gap: 16px; border-top: 1px solid var(--border); padding-top: 10px; }
.feed-action { display: flex; align-items: center; gap: 5px; background: none; border: none; cursor: pointer; font-size: 13px; color: var(--text-muted); font-family: var(--font-body); }
</style>
