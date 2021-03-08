export default {
	data() {
		return {
			SERVER_URL: process.env.VUE_APP_API_URL,
		};
	},
	methods: {
		// 전역 알림 창
		sAlert(text) {
			this.$dialog.notify({
				text: text,
				position: 'top',
			});
		},
		// 전역 확인 창
		async sConfirm(title = '확인', text, successFunction) {
			this.$dialog.confirm({
				title,
				text,
				actions: {
					true: {
						color: 'red',
						text: '예',
						handle: () => {
							successFunction();
						},
					},
				},
			});
		},
		checkBizNo(bizNo) {
			// 사업자 번호 체크

			let checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
			let i,
				chkSum = 0,
				c2,
				remander;
			bizNo = bizNo.replace(/-/gi, '');
			if (bizNo.length != 10) {
				return false;
			}
			for (i = 0; i <= 7; i++) {
				chkSum += checkID[i] * bizNo.charAt(i);
			}
			c2 = '0' + checkID[8] * bizNo.charAt(8);
			c2 = c2.substring(c2.length - 2, c2.length);
			chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
			remander = (10 - (chkSum % 10)) % 10;

			return Math.floor(bizNo.charAt(9)) == remander;
		},
		engOnly(e) {
			e.target.value = e.target.value.replace(/[0-9]|[^\\!-z]/gi, '');
		},
		engNumberOnly(e) {
			e.target.value = e.target.value.replace(/[^\\!-z]/gi, '');
		},
		formatDate(date, type = '') {
			let year = date.getFullYear();
			let month = new String(date.getMonth() + 1);
			let day = new String(date.getDate());
			if (month.length == 1) {
				month = '0' + month;
			}
			if (day.length == 1) {
				day = '0' + day;
			}

			return year + type + month + type + day;
		},
		getTodayFromTo() {
			let arr = new Array();
			arr.push(new Date(`${this.formatDate(new Date(), '-')}:00:00`));
			arr.push(new Date(`${this.formatDate(new Date(), '-')}:23:59`));
			return arr;
		},
		formatTime(date) {
			let hour = date.getHours();
			let min = date.getMinutes();
			hour = hour < 10 ? '0' + hour : hour;
			min = min < 10 ? '0' + min : min;
			return hour + '' + min;
		},
		getYearMonth() {
			let date = new Date();
			let year = date.getFullYear();
			let month = new String(date.getMonth() + 1);

			if (month.length == 1) {
				month = '0' + month;
			}

			return year + '-' + month;
		},
	},
};
