<template>
	<v-container>
		<v-card>
			<v-simple-table>
				<thead>
					<tr>
						<th>설정</th>
						<td><v-btn>캔들 적재</v-btn></td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>시작</th>
						<td>
							<v-combobox v-model="start.year" :items="year" solo class="combo"></v-combobox>
							<v-combobox v-model="start.month" :items="month" solo class="combo subcombo"></v-combobox>
							<v-combobox v-model="start.day" :items="day" solo class="combo subcombo"></v-combobox>
						</td>
					</tr>
					<tr>
						<th>종료</th>
						<td>
							<v-combobox v-model="end.year" :items="year" solo class="combo"></v-combobox>
							<v-combobox v-model="end.month" :items="month" solo class="combo subcombo"></v-combobox>
							<v-combobox v-model="end.day" :items="day" solo class="combo subcombo"></v-combobox>
						</td>
					</tr>
					<tr>
						<th>코인</th>
						<td>
							<v-select
								:items="states"
								:menu-props="{ maxHeight: '400' }"
								label="코인"
								multiple
								hint="Pick your favorite states"
								persistent-hint
							></v-select>
						</td>
					</tr>
					<tr>
						<th>캔들</th>
						<td>
							<v-combobox v-model="candle" :items="['2h']" solo class="combo"></v-combobox>
						</td>
					</tr>
					<tr>
						<th>모델</th>
						<td>
							<v-combobox v-model="model" :items="['HA']" solo class="combo"></v-combobox>
						</td>
					</tr>
					<tr>
						<th>금액</th>
						<td>
							<v-text-field label="금액" :rules="rules" hide-details="auto"></v-text-field>
						</td>
					</tr>
					<tr>
						<td><v-btn>테스트</v-btn></td>
					</tr>
				</tbody>
			</v-simple-table>
		</v-card>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			start: {
				year: 2021,
				month: '01',
				day: '01',
			},
			end: {
				year: 2013,
				month: '01',
				day: '01',
			},
			candle: '2h',
			model: 'HA',
			year: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
			month: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
			day: [
				'01',
				'02',
				'03',
				'04',
				'05',
				'06',
				'07',
				'08',
				'09',
				'10',
				'11',
				'12',
				'13',
				'14',
				'15',
				'16',
				'17',
				'18',
				'19',
				'20',
				'21',
				'22',
				'23',
				'24',
				'25',
				'26',
				'27',
				'28',
				'29',
				'30',
			],
			states: ['ADA', 'ATOM', 'BCH', 'BSV', 'BTC', 'DOT', 'EOS', 'ETC', 'ETH', 'GAS'],
			rules: [value => !!value || 'Required.', value => (value && value.length >= 3) || 'Min 3 characters'],
		};
	},
};
</script>

<style>
.combo {
	display: inline-block;
	margin-right: 20px !important;
}
.subcombo {
	width: 5em;
}
.combo > .v-input__control {
	margin-top: 20px;
	margin-right: 10px;
}
</style>
