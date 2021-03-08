import { doAxios } from './api';
// 사용자 등록
function registerUser(data) {
	return doAxios('/signUp', 'post', data);
}

// 사용자 로그인
function loginUser(data) {
	return doAxios('/signIn', 'post', data);
}

export { registerUser, loginUser };
