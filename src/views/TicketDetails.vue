<template>
  <div class="ticket-page page">
    <div class="page-header">
      <button class="back-btn" @click="$router.back()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <h1>Ticket Details</h1>
      <button class="share-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      </button>
    </div>

    <div class="ticket-content">
      <div class="confirm-check">
        <div class="check-circle">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2>Registration Confirmed</h2>
        <p>AdDU Alumni Homecoming 2024</p>
      </div>

      <div class="ticket-card">
        <div class="ticket-event-img">
          <span class="confirmed-tag">CONFIRMED</span>
        </div>
        <div class="ticket-body">
          <h3>Blue & Gold Gala Night</h3>
          <p class="ticket-venue">Finster Hall Auditorium</p>

          <div class="ticket-row">
            <div class="ticket-meta">
              <p class="tm-label">DATE</p>
              <p class="tm-val">Dec 08, 2024</p>
            </div>
            <div class="ticket-meta">
              <p class="tm-label">TIME</p>
              <p class="tm-val">⏰ 6:00 PM</p>
            </div>
          </div>

          <div class="ticket-row" style="margin-top: 10px;">
            <div class="ticket-meta">
              <p class="tm-label">GUEST NAME</p>
              <p class="tm-val">👤 Maria Dela Cruz (BS Bio '15)</p>
            </div>
          </div>

          <div class="ticket-divider">
            <div class="ticket-notch left"></div>
            <div class="dashed-line"></div>
            <div class="ticket-notch right"></div>
          </div>

          <div class="qr-section">
            <div class="qr-code">
              <!-- QR Code SVG -->
              <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                <rect width="140" height="140" fill="white"/>
                <!-- QR Pattern simplified -->
                <rect x="10" y="10" width="40" height="40" fill="#1a3a6b" rx="4"/>
                <rect x="16" y="16" width="28" height="28" fill="white" rx="2"/>
                <rect x="22" y="22" width="16" height="16" fill="#1a3a6b" rx="2"/>
                <rect x="90" y="10" width="40" height="40" fill="#1a3a6b" rx="4"/>
                <rect x="96" y="16" width="28" height="28" fill="white" rx="2"/>
                <rect x="102" y="22" width="16" height="16" fill="#1a3a6b" rx="2"/>
                <rect x="10" y="90" width="40" height="40" fill="#1a3a6b" rx="4"/>
                <rect x="16" y="96" width="28" height="28" fill="white" rx="2"/>
                <rect x="22" y="102" width="16" height="16" fill="#1a3a6b" rx="2"/>
                <!-- Random data squares -->
                <rect x="56" y="10" width="8" height="8" fill="#1a3a6b"/>
                <rect x="68" y="10" width="8" height="8" fill="#1a3a6b"/>
                <rect x="56" y="22" width="8" height="8" fill="#1a3a6b"/>
                <rect x="64" y="32" width="8" height="8" fill="#1a3a6b"/>
                <rect x="56" y="56" width="8" height="8" fill="#c9a84c"/>
                <rect x="68" y="56" width="8" height="8" fill="#c9a84c"/>
                <rect x="80" y="56" width="8" height="8" fill="#1a3a6b"/>
                <rect x="56" y="68" width="8" height="8" fill="#1a3a6b"/>
                <rect x="72" y="68" width="8" height="8" fill="#1a3a6b"/>
                <rect x="80" y="80" width="8" height="8" fill="#1a3a6b"/>
                <rect x="56" y="80" width="8" height="8" fill="#1a3a6b"/>
                <rect x="68" y="92" width="8" height="8" fill="#1a3a6b"/>
                <rect x="80" y="92" width="8" height="8" fill="#1a3a6b"/>
                <rect x="68" y="104" width="8" height="8" fill="#1a3a6b"/>
                <rect x="80" y="116" width="8" height="8" fill="#1a3a6b"/>
                <rect x="96" y="56" width="8" height="8" fill="#1a3a6b"/>
                <rect x="108" y="56" width="8" height="8" fill="#1a3a6b"/>
                <rect x="120" y="68" width="8" height="8" fill="#1a3a6b"/>
                <rect x="96" y="80" width="8" height="8" fill="#1a3a6b"/>
                <rect x="10" y="56" width="8" height="8" fill="#1a3a6b"/>
                <rect x="22" y="56" width="8" height="8" fill="#1a3a6b"/>
                <rect x="34" y="68" width="8" height="8" fill="#1a3a6b"/>
                <rect x="10" y="80" width="8" height="8" fill="#1a3a6b"/>
              </svg>
            </div>
            <p class="qr-label">Present this QR code at the entrance</p>
            <p class="qr-id">TID · ADDU-GALA-R7XC</p>
          </div>
        </div>
      </div>

      <div class="ticket-actions">
        <button class="ticket-action-btn" @click="$router.push('/calendar')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Add to Calendar
        </button>
        <button class="ticket-action-btn primary-action">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Save Ticket
        </button>
      </div>

      <div class="dress-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <p><strong>Dress Code: Formal Filipiniana</strong><br>Please bring your Alumni ID for verification. Gates open at 5:00 PM.</p>
      </div>

      <button class="checkin-link" @click="$router.push('/events/checkin')">
        Simulate Check-in →
      </button>
    </div>
  </div>
</template>

<style scoped>
.ticket-content { padding: 16px 20px 24px; }

.confirm-check { text-align: center; margin-bottom: 20px; }
.check-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--success);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  box-shadow: 0 4px 16px rgba(34,197,94,0.3);
}
.confirm-check h2 { font-size: 18px; font-weight: 700; color: var(--text-primary); }
.confirm-check p { font-size: 13px; color: var(--text-muted); }

.ticket-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin-bottom: 16px;
}
.ticket-event-img {
  height: 100px;
  background: linear-gradient(135deg, #1a3a6b, #c9a84c);
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 12px;
}
.confirmed-tag {
  background: var(--success);
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
}
.ticket-body { padding: 16px; }
.ticket-body h3 { font-family: var(--font-display); font-size: 18px; color: var(--text-primary); margin-bottom: 3px; }
.ticket-venue { font-size: 12px; color: var(--text-muted); margin-bottom: 12px; }
.ticket-row { display: flex; gap: 20px; }
.ticket-meta {}
.tm-label { font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.5px; }
.tm-val { font-size: 14px; font-weight: 600; color: var(--text-primary); margin-top: 2px; }

.ticket-divider {
  display: flex;
  align-items: center;
  margin: 16px -16px;
}
.ticket-notch {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--bg);
  flex-shrink: 0;
}
.dashed-line { flex: 1; border-top: 2px dashed var(--border); }

.qr-section { display: flex; flex-direction: column; align-items: center; padding: 8px 0; }
.qr-code { border: 2px solid var(--border); border-radius: var(--radius); padding: 8px; margin-bottom: 10px; }
.qr-label { font-size: 12px; color: var(--text-secondary); margin-bottom: 4px; }
.qr-id { font-size: 11px; color: var(--text-muted); }

.ticket-actions { display: flex; gap: 10px; margin-bottom: 12px; }
.ticket-action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  background: white;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
}
.ticket-action-btn.primary-action { background: var(--navy); color: white; border-color: var(--navy); }

.dress-note {
  display: flex;
  gap: 10px;
  background: #eff6ff;
  border-radius: var(--radius);
  padding: 12px;
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.checkin-link {
  display: block;
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  background: none;
  border: 1.5px dashed var(--border);
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--text-muted);
  cursor: pointer;
  text-align: center;
}

.share-btn { background: none; border: none; cursor: pointer; color: var(--navy); }
</style>
