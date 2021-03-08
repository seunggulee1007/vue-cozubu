<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4>
				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title>코주부 </v-toolbar-title>
						<v-spacer></v-spacer>
					</v-toolbar>
					<v-card-text>
						<v-form>
							<v-text-field v-model="userId" label="아이디" ref="userId" type="text"></v-text-field>
							<v-text-field
								v-model="password"
								label="비밀번호"
								ref="password"
								type="password"
							></v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" @click="login">로그인</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	data() {
		return {
			userId: '',
			password: '',
		};
	},
	methods: {
		...mapActions(['LOGIN']),
		async login() {
			if (!this.userId) {
				alert('아이디를 입력해 주세요');
				this.$refs.userId.focus();
				return;
			} else if (!this.password) {
				alert('비밀번호를 입력해 주세요');
				this.$refs.password.focus();
				return;
			}
			const params = {
				userId: this.userId,
				password: this.password,
			};
			try {
				let res = await this.LOGIN(params);
				if (res.result == 0) {
					this.$router.push('/');
				} else {
					this.sAlert(res.resultMsg);
				}
			} catch (e) {
				console.log(e);
			}
		},
	},
};
</script>

<style></style>
