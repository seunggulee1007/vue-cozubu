import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './auth/auth';
import Menu from './menu/menu';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		Auth,
		Menu,
	},
	plugins: [
		createPersistedState({
			//주목! : 여기에 쓴 모듈만 저장됩니다.
			paths: ['User', 'Menu'],
		}),
	],
});
