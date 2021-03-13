import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueCookie from 'vue-cookie';
import mixins from './plugins/mixins';
Vue.use(VueCookie);
Vue.mixin(mixins);
Vue.config.productionTip = false;

// 통화로 변경해 주는 필터링
Vue.filter('currency', function(value, flag) {
	if (!value) {
		return;
	} else {
		value = value.toString();
		if (value.indexOf('.') != -1) {
			// 소수점 들어왔을 시
			if (flag) {
				// 반올림 여부
				value = Math.round(value);
			} else {
				let values = value.split('.');
				return values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + values[1];
			}
		}
		return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
});

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app');
