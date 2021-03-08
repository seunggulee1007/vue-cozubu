<template>
	<v-app-bar app color="deep-purple accent-4" dense dark>
		<v-app-bar-nav-icon @click="setDrawer"></v-app-bar-nav-icon>

		<v-toolbar-title>코주부(코인)</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-heart</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	methods: {
		...mapMutations(['setDrawer']),
	},
};
</script>

<style></style>
