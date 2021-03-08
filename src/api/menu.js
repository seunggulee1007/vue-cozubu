import { doAxios } from './api';

function selectRouterMenuList() {
	return doAxios('/common/menuList', 'get');
}

function selectMenuList() {
	return doAxios('/menu/menuList', 'get');
}

function selectAuthMenuList(menuId) {
	return doAxios(`/menu/authMenuList/${menuId}`, 'get');
}
export { selectRouterMenuList, selectMenuList, selectAuthMenuList };
