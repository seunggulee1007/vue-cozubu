import { doAxios } from '../api';

function getCodeList(codeGroup) {
	return doAxios(`/common/code/${codeGroup}`, 'get');
}

export { getCodeList };
