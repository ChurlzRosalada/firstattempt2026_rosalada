<template>
  <div class="forgot-page page-no-nav stagger">
    <button class="back-btn-top" @click="$router.back()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
    </button>

    <div class="forgot-content">
      <div class="seal-circle">
        <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="#c9a84c" stroke-width="3"/>
          <circle cx="50" cy="50" r="40" stroke="#1a3a6b" stroke-width="2"/>
          <text x="50" y="54" text-anchor="middle" fill="#1a3a6b" font-size="14" font-weight="bold">AdDU</text>
        </svg>
      </div>

      <h1 class="forgot-title">Forgot Password?</h1>
      <p class="forgot-desc">No worries! Enter your registered email address and we'll send you a link to reset your password.</p>

      <div class="form-group" style="margin-top: 32px;">
        <label>Email Address</label>
        <div class="input-icon-wrap">
          <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <input v-model="email" type="email" class="form-input has-icon" placeholder="alumni@addu.edu.ph" />
        </div>
      </div>

      <button class="btn-primary" @click="handleSubmit" style="margin-top: 8px;">
        Send Reset Link
      </button>

      <div v-if="sent" class="success-msg">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Reset link sent! Check your email.
      </div>
    </div>

    <button class="back-to-login" @click="$router.push('/login')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      Back to Login
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const sent = ref(false)
const handleSubmit = () => { if (email.value) sent.value = true }
</script>

<style scoped>
.forgot-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #f8faff 0%, #eef2fb 100%);
  padding: 52px 28px 40px;
  display: flex;
  flex-direction: column;
}

.back-btn-top {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--navy);
  padding: 4px;
  align-self: flex-start;
  margin-bottom: 32px;
}

.forgot-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.seal-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(26,58,107,0.12);
  border: 2px solid #f0c96a;
  margin-bottom: 24px;
}

.forgot-title {
  font-family: var(--font-display);
  font-size: 26px;
  color: var(--navy);
  margin-bottom: 12px;
}

.forgot-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 280px;
}

.input-icon-wrap { position: relative; }
.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}
.form-input.has-icon { padding-left: 40px; }
.form-group { width: 100%; text-align: left; }

.success-msg {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #dcfce7;
  color: #16a34a;
  padding: 12px 16px;
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 500;
  margin-top: 16px;
  width: 100%;
}

.back-to-login {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: 14px;
  margin: 0 auto;
  padding: 8px;
}
</style>
