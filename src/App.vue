<template>
	<v-app>
		<app-header app v-if="isLogin"></app-header>
		<v-navigation-drawer app main permanent v-if="isDrawer">
			<navi-bar></navi-bar>
		</v-navigation-drawer>
		<v-main>
			<transition name="fade">
				<router-view />
			</transition>
		</v-main>
	</v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import NaviBar from '@/components/NaviBar';
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['isDrawer', 'isLogin']),
	},
	components: {
		NaviBar,
		AppHeader,
	},
	name: 'App',
	data: () => ({
		// drawer: false,
	}),
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
