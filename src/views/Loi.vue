<template>
	<v-container>
		<v-container>
			<v-card>
				<v-card-title>실시간 수익</v-card-title>
				<v-card-text>
					<v-card-text>34,579</v-card-text>
					<v-card-text>8.79</v-card-text>
					<v-card-actions>
						<v-btn color="orange lighten-2" text>
							{{ show ? '접기' : '펼치기' }}
						</v-btn>

						<v-spacer></v-spacer>
						<v-btn icon @click="show = !show">
							<v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
						</v-btn>
					</v-card-actions>
					<v-expand-transition>
						<div v-show="show">
							<v-divider></v-divider>

							<v-simple-table>
								<thead>
									<tr>
										<th>코인<br />매매수량</th>
										<th>매수금액 <br />수익금액</th>
										<th>현재금액 <br />수익률</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(item, idx) in data" :key="idx">
										<td>
											{{ item.coin }}<br />
											{{ item.coin_cnt }}
										</td>
										<td>
											{{ item.buy_price | currency }} <br />
											<span :class="{ color_red: item.price > 0, color_blue: item.price < 0 }">{{
												item.price | currency
											}}</span>
										</td>
										<td>
											{{ item.current_buy_price | currency }}<br />
											<span :class="{ color_red: item.roi > 0, color_blue: item.roi < 0 }">{{
												item.roi
											}}</span>
										</td>
									</tr>
								</tbody>
							</v-simple-table>
						</div>
					</v-expand-transition>
				</v-card-text>
			</v-card>
		</v-container>
	</v-container>
</template>

<script>
// import { getStrategy } from '@/api/roi';
export default {
	created() {
		// this.strategyList = getStrategy('HA');
	},
	data() {
		return {
			show: false,
			data: [
				{
					buy_price: 100000,
					coin: 'BTC',
					coin_cnt: 0.00145353,
					current_buy_price: 100386,
					price: 386,
					roi: 0.39,
				},
				{
					buy_price: 100000,
					coin: 'ENJ',
					coin_cnt: 47.16981132,
					current_buy_price: 107675,
					price: 7675,
					roi: 7.68,
				},
				{
					buy_price: 200288,
					coin: 'ETH',
					coin_cnt: 0.09596942,
					current_buy_price: 208333,
					price: 8045,
					roi: 4.02,
				},
				{
					buy_price: 90000,
					coin: 'LTC',
					coin_cnt: 0.36606997,
					current_buy_price: 95339,
					price: 5339,
					roi: 5.93,
				},
				{
					buy_price: 50000,
					coin: 'MANA',
					coin_cnt: 67.65899864,
					current_buy_price: 54681,
					price: 4681,
					roi: 9.36,
				},
				{
					buy_price: 50000,
					coin: 'NPXS',
					coin_cnt: 17667.84452296,
					current_buy_price: 75719,
					price: 25719,
					roi: 51.44,
				},
				{
					buy_price: 200000,
					coin: 'SAND',
					coin_cnt: 331.12582781,
					current_buy_price: 226263,
					price: 26264,
					roi: 13.13,
				},
			],
		};
	},
};
</script>

<style>
.chart-wrap {
	height: 300px;
}
.color_red {
	color: red;
}
.color_blue {
	color: dodgerblue;
}
</style>
