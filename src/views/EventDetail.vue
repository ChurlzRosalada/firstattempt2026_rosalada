<template>
  <div class="event-detail-page page">
    <div class="hero-section">
      <div class="hero-img">
        <div class="hero-overlay"></div>
        <div class="hero-tags">
          <span class="feat-tag gala">GALA</span>
          <span class="feat-tag networking">NETWORKING</span>
        </div>
        <div class="hero-actions">
          <button class="hero-btn" @click="$router.back()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div class="hero-right-btns">
            <button class="hero-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
            <button class="hero-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-content">
      <h1 class="event-title">AdDU Annual Alumni Gala 2024</h1>

      <div class="event-meta-card card">
        <div class="meta-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <div>
            <p class="meta-main">Friday, October 15, 2024</p>
            <p class="meta-sub">4:00 PM – 9:00 PM</p>
          </div>
          <button class="add-cal-btn">Add to calendar</button>
        </div>
        <div class="meta-divider"></div>
        <div class="meta-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div>
            <p class="meta-main">Finster Hall, AdDU Jacinto</p>
            <p class="meta-sub">E. Jacinto St., Davao City, Philippines</p>
          </div>
          <button class="add-cal-btn">View on map</button>
        </div>
      </div>

      <div class="about-section">
        <h2 class="section-title">About Event</h2>
        <p class="about-text">Join us for an evening of networking, reconnecting with fellow Blue Knights, and celebrating our university's achievements. The gala will feature a keynote address by the University President and exclusive opportunities to meet distinguished alumni in a relaxed, elegant setting.</p>
        <div class="hashtags">
          <span class="hashtag">#AdDUAlumni2024</span>
          <span class="hashtag">#BlueKnights</span>
          <span class="hashtag">#Networking</span>
        </div>
      </div>

      <div class="speakers-section">
        <div class="section-row">
          <h2 class="section-title">Speakers & Guests</h2>
          <a href="#" class="see-all">See All</a>
        </div>
        <div class="speakers-scroll">
          <div v-for="sp in speakers" :key="sp.name" class="speaker-card">
            <div class="avatar" :style="`width:52px;height:52px;font-size:16px;background:${sp.color};`">{{ sp.initials }}</div>
            <p class="sp-name">{{ sp.name }}</p>
            <p class="sp-role">{{ sp.role }}</p>
          </div>
        </div>
      </div>

      <div class="agenda-section">
        <h2 class="section-title">Agenda</h2>
        <div class="agenda-list">
          <div v-for="item in agenda" :key="item.time" class="agenda-item">
            <div class="agenda-dot"></div>
            <div class="agenda-info">
              <p class="agenda-name">{{ item.name }}</p>
              <p class="agenda-desc">{{ item.desc }}</p>
            </div>
            <span class="agenda-time">{{ item.time }}</span>
          </div>
        </div>
      </div>

      <div class="location-section">
        <h2 class="section-title">Location</h2>
        <div class="map-placeholder">
          <div class="map-pin">📍</div>
        </div>
      </div>

      <div class="register-footer">
        <div class="ticket-price">
          <span class="price-label">TICKET PRICE</span>
          <span class="price">₱1,500.00</span>
        </div>
        <button class="btn-primary" style="width:auto;flex:1;" @click="$router.push('/events/ticket')">
          Register Now →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const speakers = [
  { name: 'Fr. Cruz SJ', initials: 'FC', role: 'President', color: '#1a3a6b' },
  { name: 'Maria Santos', initials: 'MS', role: 'Alumni Head', color: '#e8937a' },
  { name: 'James Lee', initials: 'JL', role: 'Keynote', color: '#4a7fa5' },
  { name: 'Atty. Reyes', initials: 'AR', role: 'Legal Staff', color: '#6b9e6b' },
]
const agenda = [
  { time: '6:00 PM', name: 'Welcome Reception', desc: 'Registration and welcome drinks at the Finster Lobby.' },
  { time: '7:30 PM', name: "President's Address", desc: 'State of the University Address by Fr. Cruz SJ.' },
  { time: '8:30 PM', name: 'Networking Dinner', desc: 'Buffet dinner featuring local Davao delicacies.' },
]
</script>

<style scoped>
.event-detail-page { background: var(--bg); }

.hero-section { position: relative; }
.hero-img {
  height: 220px;
  background: linear-gradient(135deg, #1a3a6b 0%, #c9a84c 60%, #e8937a 100%);
  position: relative;
}
.hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.2); }
.hero-tags { position: absolute; top: 56px; left: 16px; display: flex; gap: 6px; z-index: 2; }
.feat-tag { padding: 3px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; }
.feat-tag.gala { background: #c9a84c; color: white; }
.feat-tag.networking { background: white; color: var(--navy); }
.hero-actions { position: absolute; top: 52px; left: 0; right: 0; display: flex; justify-content: space-between; align-items: center; padding: 0 16px; z-index: 2; }
.hero-right-btns { display: flex; gap: 8px; }
.hero-btn { background: rgba(255,255,255,0.2); border: none; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: white; backdrop-filter: blur(4px); }

.detail-content { padding: 20px; }
.event-title { font-family: var(--font-display); font-size: 22px; color: var(--text-primary); margin-bottom: 16px; line-height: 1.3; }

.event-meta-card { margin-bottom: 20px; }
.meta-row { display: flex; align-items: center; gap: 12px; }
.meta-main { font-size: 14px; font-weight: 600; color: var(--text-primary); }
.meta-sub { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
.meta-divider { height: 1px; background: var(--border); margin: 12px 0; }
.add-cal-btn { margin-left: auto; font-size: 11px; color: var(--navy); background: none; border: none; cursor: pointer; font-family: var(--font-body); font-weight: 500; white-space: nowrap; }

.section-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.see-all { font-size: 13px; color: var(--navy); text-decoration: none; font-weight: 500; }

.about-section { margin-bottom: 20px; }
.about-text { font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 10px; }
.hashtags { display: flex; flex-wrap: wrap; gap: 6px; }
.hashtag { font-size: 12px; color: var(--navy); font-weight: 500; }

.speakers-scroll { display: flex; gap: 12px; overflow-x: auto; scrollbar-width: none; }
.speaker-card { flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 5px; text-align: center; }
.sp-name { font-size: 12px; font-weight: 600; color: var(--text-primary); }
.sp-role { font-size: 11px; color: var(--text-muted); }

.agenda-section { margin: 20px 0; }
.agenda-list { padding-left: 8px; }
.agenda-item { display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-left: 2px solid var(--border); padding-left: 16px; position: relative; }
.agenda-dot { position: absolute; left: -5px; top: 16px; width: 8px; height: 8px; border-radius: 50%; background: var(--navy); }
.agenda-name { font-size: 14px; font-weight: 600; color: var(--text-primary); }
.agenda-desc { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
.agenda-info { flex: 1; }
.agenda-time { font-size: 12px; font-weight: 600; color: var(--navy); white-space: nowrap; }

.map-placeholder {
  height: 140px;
  background: #e8edf5;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 20px;
}

.register-footer {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  border-radius: var(--radius);
  padding: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
}
.ticket-price { flex-shrink: 0; }
.price-label { font-size: 10px; color: var(--text-muted); font-weight: 600; letter-spacing: 0.5px; display: block; }
.price { font-size: 18px; font-weight: 700; color: var(--navy); }
</style>
