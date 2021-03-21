import axios from 'axios';
import { setInterceptors, setInterceptorsPost } from '@/api/common';
import router from '@/router/index';
import store from '@/store/index';

function createInstance() {
	return setInterceptors(
		axios.create({
			baseURL: `${process.env.VUE_APP_API_URL}/api`,
		}),
	);
}

const instance = createInstance();

function doAxiosCozubu(url, method, params, config) {
	return axios({
		url,
		method,
		params,
		headers: { Apikey: 'jjeh' },
		config,
	})
		.then(successFunciton)
		.catch(errFunction);
}
function createPostInstance() {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}/api`,
	});
	return setInterceptorsPost(instance);
}

const postInstance = createPostInstance();

function doAxiosPostMultipart(url, param) {
	return postInstance
		.post(url, param)
		.then(successFunciton)
		.catch(errFunction);
}

function doAxiosPutMultipart(url, param) {
	return postInstance
		.put(url, param)
		.then(successFunciton)
		.catch(errFunction);
}

function doAxiosPost(url, param) {
	return instance
		.post(url, param)
		.then(successFunciton)
		.catch(errFunction);
}

function doAxiosPut(url, param) {
	return instance
		.put(url, param)
		.then(successFunciton)
		.catch(errFunction);
}

function doAxios(url, method, params, config) {
	return instance({
		url,
		method,
		params,
		config,
	})
		.then(successFunciton)
		.catch(errFunction);
}

function successFunciton(response) {
	// 토큰을 계속 갱신해 준다. 토큰은 20분간 유효하다.
	if (response.headers.access_token) {
		store.commit('setToken', response.headers.access_token);
		store._vm.$cookie.set(process.env.VUE_APP_AUTH_TOKEN, response.headers.access_token);
	}
	return response.data;
}
function errFunction(error) {
	console.log('2222');
	let res = {
		result: -1,
	};
	if (error.response) {
		res = error.response.data;
		res.status = error.response.status;
		if (error.response.status == 401) {
			// 인증 오류라면 메인 페이지로
			// 쿠키에서 인증정보 삭제 후
			store.commit('clearLoginInfo');
			store.commit('clearUserInfo');
			store._vm.$cookie.delete(process.env.VUE_APP_AUTH_TOKEN);
			store._vm.$cookie.delete(process.env.VUE_APP_USER_ID);
			router.push('/login');
			alert(res.resultMsg);
		}
	} else if (!error.status) {
		res.resultMsg = '네트워크 연결을 확인해 주세요';
	} else {
		res.data.resultMsg = error.message;
	}

	return res;
}
export { createInstance, doAxios, doAxiosPostMultipart, doAxiosPutMultipart, doAxiosPost, doAxiosPut, doAxiosCozubu };
