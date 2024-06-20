import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	history: createWebHashHistory('/XingWen/'),
	routes: [
		{
			path: '/',
			redirect: '/teacher',
		},
		{
			path: '/teacher',
			name: 'teacher',
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
		{
			path: '/test',
			name: 'test',
			component: () => import('../views/TestView.vue'),
		},
	],
})

export default router
