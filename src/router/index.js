import { createRouter, createWebHistory } from 'vue-router'
import TeacherView from '../views/TeacherView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'teacher',
			component: TeacherView,
		},
		{
			path: '/teacher',
			name: 'teacher',
			// route level code-splitting
			// this generates a separate chunk (Teacher.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/TeacherView.vue'),
		},
		{
			path: '/student',
			name: 'student',
			component: () => import('../views/StudentView.vue'),
		},
		{
			path: '/school',
			name: 'school',
			component: () => import('../views/SchoolView.vue'),
		},
	],
})

export default router
