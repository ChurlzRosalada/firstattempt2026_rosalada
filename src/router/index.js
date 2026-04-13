import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../views/Login.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Directory from '../views/Directory.vue'
import MentorshipHub from '../views/MentorshipHub.vue'
import RequestMentorship from '../views/RequestMentorship.vue'
import Events from '../views/Events.vue'
import EventDetail from '../views/EventDetail.vue'
import TicketDetails from '../views/TicketDetails.vue'
import CheckinSuccess from '../views/CheckinSuccess.vue'
import Calendar from '../views/Calendar.vue'
import Profile from '../views/Profile.vue'
import NotificationSettings from '../views/NotificationSettings.vue'
import TargetedInvites from '../views/TargetedInvites.vue'
import AdminEventManager from '../views/AdminEventManager.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/register', component: Register },
  { path: '/home', component: Home },
  { path: '/directory', component: Directory },
  { path: '/mentorship', component: MentorshipHub },
  { path: '/mentorship/request', component: RequestMentorship },
  { path: '/events', component: Events },
  { path: '/events/:id', component: EventDetail },
  { path: '/events/ticket', component: TicketDetails },
  { path: '/events/checkin', component: CheckinSuccess },
  { path: '/calendar', component: Calendar },
  { path: '/profile', component: Profile },
  { path: '/notifications', component: NotificationSettings },
  { path: '/admin/invites', component: TargetedInvites },
  { path: '/admin/event', component: AdminEventManager },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})
