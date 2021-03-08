import actions from './actions';
import mutations from './mutations';
import getters from './getters';

let Menu = {
	state: () => ({
		drawer: false,
	}),
	getters,
	mutations,
	actions,
};

export default Menu;
