import { loginUser } from '@/api/auth';
export default {
	async LOGIN({ commit }, params) {
		let res = await loginUser(params);
		// 결과값이 성공이라면
		if (res.result == 0) {
			let data = res.data;
			commit('setLoginInfo', data);
			this._vm.$cookie.set(process.env.VUE_APP_AUTH_TOKEN, data.authToken);
			this._vm.$cookie.set(process.env.VUE_APP_USER_ID, data.user.userId);
		}

		return res;
	},
};
