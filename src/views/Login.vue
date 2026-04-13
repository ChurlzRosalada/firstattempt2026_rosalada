<template>
  <div class="login-page page-no-nav">
    <div class="login-inner stagger">
      <button class="back-btn-top" @click="$router.back()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <div class="login-header">
        <div class="seal-wrap">
          <div class="seal-circle">
            <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" stroke="#c9a84c" stroke-width="3"/>
              <circle cx="50" cy="50" r="40" stroke="#1a3a6b" stroke-width="2"/>
              <text x="50" y="30" text-anchor="middle" fill="#1a3a6b" font-size="8" font-weight="bold">ATENEO DE DAVAO</text>
              <text x="50" y="74" text-anchor="middle" fill="#1a3a6b" font-size="7">UNIVERSITY</text>
              <path d="M30 50 Q50 30 70 50 Q50 70 30 50Z" fill="#1a3a6b" opacity="0.15"/>
              <text x="50" y="54" text-anchor="middle" fill="#c9a84c" font-size="10" font-weight="bold">AdDU</text>
            </svg>
          </div>
        </div>
        <h1 class="login-title">Fortes in Fide</h1>
        <p class="login-subtitle">Welcome back, Atenean. Sign in to<br>your alumni account.</p>
      </div>

      <div class="login-form">
        <div class="form-group">
          <label>Email Address</label>
          <input v-model="email" type="email" class="form-input" placeholder="alum@addu.edu.ph" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <div class="password-wrap">
            <input v-model="password" :type="showPw ? 'text' : 'password'" class="form-input" placeholder="••••••••" />
            <button class="pw-toggle" @click="showPw = !showPw">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path v-if="showPw" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line v-if="showPw" x1="1" y1="1" x2="23" y2="23"/>
                <path v-else d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle v-if="!showPw" cx="12" cy="12" r="3"/>
              </svg>
            </button>
          </div>
          <div class="forgot-link">
            <router-link to="/forgot-password">Forgot Password?</router-link>
          </div>
        </div>

        <button class="btn-primary" @click="handleLogin">
          Sign In
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        </button>
      </div>

      <p class="register-link">
        New to the platform? <router-link to="/register"><strong>Register here</strong> →</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPw = ref(false)

const handleLogin = () => {
  router.push('/home')
}
</script>

<style scoped>
.login-page {
  background: linear-gradient(160deg, #f8faff 0%, #eef2fb 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.login-inner {
  flex: 1;
  padding: 60px 28px 40px;
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
  margin-bottom: 24px;
}

.login-header {
  text-align: center;
  margin-bottom: 36px;
}

.seal-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.seal-circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 24px rgba(26,58,107,0.15);
  border: 3px solid #f0c96a;
}

.login-title {
  font-family: var(--font-display);
  font-size: 28px;
  color: var(--navy);
  margin-bottom: 8px;
}

.login-subtitle {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.login-form { margin-bottom: 24px; }

.password-wrap { position: relative; }
.password-wrap .form-input { padding-right: 44px; }
.pw-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
}

.forgot-link {
  text-align: right;
  margin-top: 6px;
}
.forgot-link a { font-size: 13px; color: var(--navy); text-decoration: none; }

.register-link {
  text-align: center;
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: auto;
}
.register-link a { color: var(--navy); text-decoration: none; }
</style>
