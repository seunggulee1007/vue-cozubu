export default {
	/**
	 * 로그인 이후 state에  데이터 저장
	 * @param {*} state
	 * @param {*} data
	 */
	setLoginInfo(state, data) {
		state.userId = data.user.userId;
		state.token = data.authToken;
		state.photo = data.user.photo;
	},
	/**
	 * 로그 아웃 이후 state에 내용 빈값으로 초기화
	 * @param {*} state
	 */
	clearLoginInfo(state) {
		this._vm.$cookie.delete(process.env.VUE_APP_AUTH_TOKEN);
		this._vm.$cookie.delete(process.env.VUE_APP_USER_ID);
		state.userId = '';
		state.token = '';
	},
	setToken(state, token) {
		state.token = token;
	},
};
