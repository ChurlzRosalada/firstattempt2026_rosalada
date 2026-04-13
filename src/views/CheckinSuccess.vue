<template>
  <div class="checkin-page page">
    <button class="close-btn" @click="$router.push('/events')">✕</button>
    <div class="checkin-content stagger">
      <div class="success-anim">
        <div class="outer-ring"></div>
        <div class="inner-ring"></div>
        <div class="check-circle">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      </div>
      <h1>Check-in Success!</h1>
      <p class="checkin-sub">You have successfully checked in to the<br><strong>Alumni Homecoming 2024.</strong></p>

      <div class="badge-card">
        <div class="badge-icon">
          <div class="badge-outer">
            <div class="badge-inner">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1a3a6b" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
          </div>
        </div>
        <div class="badge-unlocked-label">BADGE UNLOCKED</div>
        <p class="badge-name">Blue Knight Spirit</p>
        <p class="badge-points">Earned +100 Blue Points</p>
      </div>

      <button class="btn-primary" style="margin-top: 16px;" @click="$router.push('/profile')">
        View Badge on Profile
      </button>
    </div>
  </div>
</template>

<style scoped>
.checkin-page {
  background: var(--bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 56px;
  right: 20px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  color: var(--text-muted);
}

.checkin-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.success-anim {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
}

.outer-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid #bbf7d0;
  animation: pulse 2s ease infinite;
}

.inner-ring {
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  border: 2px solid #86efac;
  animation: pulse 2s ease 0.3s infinite;
}

.check-circle {
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  background: var(--success);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(34,197,94,0.4);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.08); opacity: 0.6; }
}

h1 {
  font-family: var(--font-display);
  font-size: 26px;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.checkin-sub {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 28px;
}

.badge-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px 32px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.badge-outer {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  box-shadow: 0 4px 20px rgba(201,168,76,0.4);
}

.badge-inner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #f0c96a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-unlocked-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--gold);
  margin-bottom: 6px;
  background: #fef3c7;
  padding: 2px 10px;
  border-radius: 10px;
}

.badge-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.badge-points {
  font-size: 13px;
  color: var(--text-secondary);
}
</style>
