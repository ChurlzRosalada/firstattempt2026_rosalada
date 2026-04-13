<template>
  <div class="register-page page-no-nav">
    <div class="page-header">
      <button class="back-btn" @click="step > 1 ? step-- : $router.back()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <h1>AdDU Alumni Verification</h1>
      <div style="width:28px;"></div>
    </div>

    <!-- Step Indicator -->
    <div class="step-indicator">
      <div class="step-tabs">
        <div v-for="(tab, i) in tabs" :key="i" class="step-tab" :class="{ active: step === i+1, done: step > i+1 }">
          <div class="step-dot"></div>
          <span>{{ tab }}</span>
        </div>
      </div>
      <div class="step-bar">
        <div class="step-progress" :style="{ width: ((step-1)/2 * 100) + '%' }"></div>
      </div>
      <p class="step-label">Step {{ step }} of 3</p>
    </div>

    <!-- Step 1: Personal -->
    <div v-if="step === 1" class="step-content stagger">
      <h2 class="step-title">Personal Details</h2>
      <p class="step-desc">Let's start with your basic information to begin the verification process.</p>
      <div class="form-group"><label>Full Name</label><input v-model="form.fullName" type="text" class="form-input" placeholder="e.g. Juan Dela Cruz" /></div>
      <div class="form-group"><label>Date of Birth</label><input v-model="form.dob" type="date" class="form-input" /></div>
      <div class="form-group">
        <label>Gender</label>
        <select v-model="form.gender" class="form-input">
          <option value="" disabled>Select Gender</option>
          <option>Male</option><option>Female</option><option>Prefer not to say</option>
        </select>
      </div>
      <div class="form-group"><label>Mobile Number</label><input v-model="form.mobile" type="tel" class="form-input" placeholder="e.g. 0917 123 4567" /></div>
      <button class="btn-primary" @click="step = 2" style="margin-top: 8px;">Next Step</button>
    </div>

    <!-- Step 2: Academic -->
    <div v-if="step === 2" class="step-content stagger">
      <h2 class="step-title">Verify Your Profile</h2>
      <p class="step-desc">Please provide your AdDU academic details to ensure you are verified as an alumnus.</p>
      <div class="form-group"><label>Student ID / Roll Number</label><input v-model="form.studentId" type="text" class="form-input" placeholder="e.g. 2018-0045" /></div>
      <div class="form-group"><label>Course / Major</label><input v-model="form.course" type="text" class="form-input" placeholder="e.g. BS Computer Science" /></div>
      <div class="form-group">
        <label>Graduation Batch</label>
        <select v-model="form.batch" class="form-input">
          <option value="" disabled>Select Year</option>
          <option v-for="y in years" :key="y">{{ y }}</option>
        </select>
      </div>
      <div class="form-group">
        <div class="proof-header">
          <label>Proof of Education</label>
          <a href="#" class="why-link">Why do we need this?</a>
        </div>
        <div class="upload-box" @click="triggerUpload">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b7a99" stroke-width="1.5"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
          <p class="upload-label">Tap to upload</p>
          <p class="upload-sub">Diploma, Transcript, or AdDU ID (Max 5MB)</p>
          <input ref="fileInput" type="file" style="display:none" @change="handleFile" />
          <span v-if="form.file" class="file-name">{{ form.file }}</span>
        </div>
      </div>
      <button class="btn-primary" @click="step = 3">Submit for Verification</button>
    </div>

    <!-- Step 3: Review -->
    <div v-if="step === 3" class="step-content stagger">
      <h2 class="step-title">Review & Submit</h2>
      <p class="step-desc">Please review your information carefully. Ensure all details are accurate before submitting for verification.</p>

      <div class="review-section">
        <div class="review-header">
          <span>Personal Info</span>
          <button class="edit-btn" @click="step = 1">Edit</button>
        </div>
        <div class="review-row"><span>Full Name</span><strong>{{ form.fullName || 'Maria Clara Santos' }}</strong></div>
        <div class="review-row"><span>Email</span><strong>maria.santos@addu.edu...</strong></div>
        <div class="review-row"><span>Phone</span><strong>{{ form.mobile || '+63 917 123 4567' }}</strong></div>
      </div>

      <div class="review-section">
        <div class="review-header">
          <span>Academic Info</span>
          <button class="edit-btn" @click="step = 2">Edit</button>
        </div>
        <div class="review-row"><span>Student ID</span><strong>{{ form.studentId || '2018-0045' }}</strong></div>
        <div class="review-row"><span>Course</span><strong>{{ form.course || 'BS Computer Science' }}</strong></div>
        <div class="review-row"><span>Batch</span><strong>{{ form.batch || '2022' }}</strong></div>
        <div class="file-chip">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          <span>diploma_scan.pdf &nbsp; 2.4 MB</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      </div>

      <div class="tos-row">
        <input v-model="tosAccepted" type="checkbox" id="tos" />
        <label for="tos">I confirm that the information provided is accurate. <a href="#">Terms of Service</a> By clicking submit, I agree to the terms.</label>
      </div>

      <button class="btn-primary" @click="$router.push('/home')" style="margin-top: 16px;">
        Confirm Submission
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const step = ref(1)
const tabs = ['Personal', 'Academic', 'Verify']
const tosAccepted = ref(false)
const fileInput = ref(null)

const form = ref({
  fullName: '', dob: '', gender: '', mobile: '',
  studentId: '', course: '', batch: '', file: ''
})

const years = Array.from({ length: 30 }, (_, i) => 2024 - i)
const triggerUpload = () => fileInput.value?.click()
const handleFile = (e) => {
  if (e.target.files[0]) form.value.file = e.target.files[0].name
}
</script>

<style scoped>
.register-page { background: var(--bg); min-height: 100vh; }

.step-indicator {
  padding: 16px 20px 0;
  background: white;
  border-bottom: 1px solid var(--border);
}

.step-tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.step-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
}

.step-tab.active { color: var(--navy); }
.step-tab.done { color: var(--success); }

.step-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border);
  transition: background 0.2s;
}
.step-tab.active .step-dot { background: var(--navy); }
.step-tab.done .step-dot { background: var(--success); }

.step-bar {
  height: 3px;
  background: var(--border);
  border-radius: 2px;
  margin-bottom: 8px;
  overflow: hidden;
}
.step-progress {
  height: 100%;
  background: var(--navy);
  border-radius: 2px;
  transition: width 0.4s ease;
}

.step-label {
  text-align: center;
  font-size: 12px;
  color: var(--text-muted);
  padding-bottom: 12px;
}

.step-content {
  padding: 24px 20px;
}

.step-title {
  font-family: var(--font-display);
  font-size: 22px;
  color: var(--navy);
  margin-bottom: 8px;
}

.step-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 24px;
}

.proof-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.proof-header label { margin-bottom: 0; font-size: 13px; font-weight: 500; color: var(--text-secondary); }
.why-link { font-size: 12px; color: var(--navy); text-decoration: none; }

.upload-box {
  border: 2px dashed var(--border);
  border-radius: var(--radius);
  padding: 28px 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s;
  background: #fafbff;
}
.upload-box:hover { border-color: var(--navy); }
.upload-label { font-size: 14px; font-weight: 600; color: var(--text-primary); margin-top: 8px; }
.upload-sub { font-size: 12px; color: var(--text-muted); margin-top: 4px; }
.file-name { display: block; font-size: 12px; color: var(--navy); margin-top: 8px; }

.review-section {
  background: white;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 16px;
  margin-bottom: 12px;
}
.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
}
.edit-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--navy);
  font-size: 13px;
  font-family: var(--font-body);
  font-weight: 500;
}
.review-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 5px 0;
  border-bottom: 1px solid var(--border);
  color: var(--text-secondary);
}
.review-row:last-child { border-bottom: none; }
.review-row strong { color: var(--text-primary); }

.file-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f0f7ff;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 12px;
  color: var(--text-primary);
  margin-top: 10px;
}

.tos-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.5;
}
.tos-row input { margin-top: 2px; flex-shrink: 0; }
.tos-row a { color: var(--navy); }
</style>
