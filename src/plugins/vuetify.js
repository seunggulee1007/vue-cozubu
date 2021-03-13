import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VuetifyDialog from 'vuetify-dialog';
import 'vuetify-dialog/dist/vuetify-dialog.css';
import 'vuetify/dist/vuetify.min.css';
const vuetifyOptions = {
	theme: { dark: false },
};
Vue.use(VuetifyDialog, {
	context: {
		Vuetify,
	},
});
Vue.use(Vuetify);

export default new Vuetify(vuetifyOptions);
