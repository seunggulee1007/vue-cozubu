function saveCookie(name, value) {
	let date = new Date();
	date.setDate(date.getDate() + 7); // 일주일로 쿠키 값 세팅
	if (getCookie(name)) {
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
	}
	document.cookie = `${name}=${value};expires=${date.toUTCString};path=/`;
}

function getCookie(name) {
	let regex = '(?:(?:^|.*;\\s*){name}\\s*=\\s*([^;]*).*$)|^.*$';
	regex = new RegExp(regex.replace(/{name}/gi, name));
	return document.cookie.replace(regex, '$1');
}

function deleteCookie(name) {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export { saveCookie, getCookie, deleteCookie };
