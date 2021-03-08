import { getCookie } from '@/utils/cookies';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

let Auth = {
	state: () => ({
		userId: getCookie(process.env.VUE_APP_USER_ID) || '',
		token: getCookie(process.env.VUE_APP_AUTH_TOKEN) || '',
	}),
	getters,
	mutations,
	actions,
};

export default Auth;
