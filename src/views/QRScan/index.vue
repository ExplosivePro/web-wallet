<template>
	<QrScanner :setResult="setScanResult">
		<v-row v-if="scanResult">
			<v-col cols="6" align="center">
				<v-btn class="primary"
					@click="save2App"
				>
					Secure
				</v-btn>
			</v-col>
			<v-col cols="6" align="center">
				<v-btn
					class="warning"
					@click="save2Web"
				>
					Quick
				</v-btn>
			</v-col>
		</v-row>
	</QrScanner>
</template>
<script>
import QrScanner from '@/components/QRScanner'

export default {
	components: {
		QrScanner,
	},
	data() {
		return {
			scanResult:''
		}
	},
	methods: {
		setScanResult (data) {
			this.scanResult = data
		},
		save2Web () {
			console.log('save2Web')
		},

		save2App () {
			console.log('save2App')
		}

	}
}
</script>
