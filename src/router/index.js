import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/teacher',
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
			name: 'studentOverview',
			component: () => import('../views/StudentView.vue'),
		},
		{
			path: '/student/:id',
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
