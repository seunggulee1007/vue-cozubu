import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/roi',
	},
	{
		path: '/login',
		name: '로그인 페이지',
		meta: { auth: true },
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/roi',
		name: '성과 분석',
		component: () => import('@/views/Loi.vue'),
	},
	{
		path: '/setting',
		name: '설정',
		component: () => import('@/views/Setting.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	console.log(store.getters.isLogin);
	if (!to.meta.auth && !store.getters.isLogin) {
		if (to.path != '/' && to.path != '/login') {
			console.log('인증이 필요합니다.');
		}
		next('/login');
		return;
	}
	next();
});

export default router;
