import { doAxiosCozubu } from './api';

function getStrategy(strategy) {
	return doAxiosCozubu(`https://cozubu.tk/api/roi/strategy/${strategy}`);
}

export { getStrategy };
