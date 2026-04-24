<template>
  <div class="auth-layout">
    <!-- Left: Branding panel -->
    <div class="auth-panel-left">
      <div class="brand-content">
        <div class="seal-wrap">
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#c9a84c" stroke-width="3"/>
            <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
            <text x="50" y="30" text-anchor="middle" fill="#c9a84c" font-size="8" font-weight="bold">ATENEO DE DAVAO</text>
            <text x="50" y="74" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="7">UNIVERSITY</text>
            <text x="50" y="54" text-anchor="middle" fill="white" font-size="14" font-weight="bold">AdDU</text>
          </svg>
        </div>
        <h1 class="brand-title">Fortes in Fide</h1>
        <p class="brand-sub">The official alumni portal for Ateneo de Davao University — connecting Blue Knights worldwide.</p>
        <div class="brand-stats">
          <div class="bstat"><span class="bstat-val">12,400+</span><span class="bstat-label">Alumni</span></div>
          <div class="bstat-divider"></div>
          <div class="bstat"><span class="bstat-val">40+</span><span class="bstat-label">Countries</span></div>
          <div class="bstat-divider"></div>
          <div class="bstat"><span class="bstat-val">1,200+</span><span class="bstat-label">Mentors</span></div>
        </div>
      </div>
    </div>

    <!-- Right: Form panel -->
    <div class="auth-panel-right">
      <div class="auth-form-wrap">
        <div class="form-heading">
          <h2>Welcome back, Atenean</h2>
          <p>Sign in to your alumni account to continue.</p>
        </div>

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
                <path v-if="!showPw" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle v-if="!showPw" cx="12" cy="12" r="3"/>
                <path v-if="showPw" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><line v-if="showPw" x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            </button>
          </div>
          <div class="forgot-row">
            <router-link to="/forgot-password">Forgot password?</router-link>
          </div>
        </div>

        <button class="btn-primary w-full" @click="handleLogin" style="width:100%;padding:13px;">
          Sign In
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        </button>

        <div class="divider-row"><span>or</span></div>

        <p class="register-prompt">
          New to the platform?
          <router-link to="/register"><strong>Create an account →</strong></router-link>
        </p>
      </div>
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
const handleLogin = () => router.push('/home')
</script>

<style scoped>
.brand-content { text-align: center; position: relative; z-index: 1; }
.seal-wrap { margin-bottom: 28px; }
.brand-title { font-family: var(--font-display); font-size: 36px; color: white; margin-bottom: 14px; }
.brand-sub { font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.7; max-width: 340px; margin: 0 auto 36px; }

.brand-stats { display: flex; align-items: center; justify-content: center; gap: 24px; }
.bstat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.bstat-val { font-size: 24px; font-weight: 700; color: var(--gold); }
.bstat-label { font-size: 11px; color: rgba(255,255,255,0.5); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
.bstat-divider { width: 1px; height: 36px; background: rgba(255,255,255,0.15); }

.form-heading { margin-bottom: 28px; }
.form-heading h2 { font-family: var(--font-display); font-size: 26px; color: var(--navy); margin-bottom: 6px; }
.form-heading p { font-size: 14px; color: var(--text-secondary); }

.password-wrap { position: relative; }
.password-wrap .form-input { padding-right: 44px; }
.pw-toggle { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: var(--text-muted); }
.forgot-row { text-align: right; margin-top: 6px; }
.forgot-row a { font-size: 13px; color: var(--navy); text-decoration: none; font-weight: 500; }

.divider-row { display: flex; align-items: center; gap: 12px; margin: 20px 0; }
.divider-row::before, .divider-row::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.divider-row span { font-size: 12px; color: var(--text-muted); }

.register-prompt { text-align: center; font-size: 14px; color: var(--text-secondary); }
.register-prompt a { color: var(--navy); text-decoration: none; }
</style>
