<template>
  <div class="auth-layout">
    <div class="auth-panel-left">
      <div class="brand-content">
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="#c9a84c" stroke-width="3"/>
          <text x="50" y="54" text-anchor="middle" fill="white" font-size="14" font-weight="bold">AdDU</text>
        </svg>
        <h1 class="brand-title">Forgot your password?</h1>
        <p class="brand-sub">Don't worry. Enter your registered email and we'll send you a secure reset link.</p>
      </div>
    </div>
    <div class="auth-panel-right">
      <div class="auth-form-wrap">
        <router-link to="/login" class="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Back to Sign In
        </router-link>
        <div class="form-heading">
          <h2>Reset Password</h2>
          <p>Enter your email and we'll send you a reset link.</p>
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input v-model="email" type="email" class="form-input" placeholder="alumni@addu.edu.ph" />
        </div>
        <button class="btn-primary" @click="handleSubmit" style="width:100%;padding:13px;">Send Reset Link</button>
        <div v-if="sent" class="success-msg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          Reset link sent! Check your inbox.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const email = ref('')
const sent = ref(false)
const handleSubmit = () => { if (email.value) sent.value = true }
</script>
<style scoped>
.brand-content { text-align:center; z-index:1; position:relative; }
.brand-title { font-family:var(--font-display); font-size:28px; color:white; margin:24px 0 12px; }
.brand-sub { font-size:15px; color:rgba(255,255,255,0.65); line-height:1.7; max-width:300px; margin:0 auto; }
.form-heading { margin-bottom:24px; }
.form-heading h2 { font-family:var(--font-display); font-size:24px; color:var(--navy); margin-bottom:6px; }
.form-heading p { font-size:14px; color:var(--text-secondary); }
.back-link { display:inline-flex; align-items:center; gap:6px; font-size:13px; color:var(--text-secondary); text-decoration:none; margin-bottom:24px; }
.back-link:hover { color:var(--navy); }
.success-msg { display:flex; align-items:center; gap:8px; background:#dcfce7; color:#16a34a; padding:12px 16px; border-radius:var(--radius); font-size:13px; font-weight:500; margin-top:16px; }
</style>
