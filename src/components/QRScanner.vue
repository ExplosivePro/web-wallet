<template>
	<v-container>
		<v-row class="mb-4 justify-center">
			<v-btn-toggle v-model="mode" mandatory>
				<v-btn>
					Camera
				</v-btn>
				<v-btn>
					Select
				</v-btn>
			</v-btn-toggle>
		</v-row>
		<v-row v-if="mode===1">
			<v-col cols="12" class="no-overflow">
				<qrcode-capture 
					@detect="onDetect"
					ref="qrInput"
					class="d-none"
				/>

				<v-img
					:src="qr_img"
					height="90vmin"
					width="100vmin"
					@click="selectFile"
					:class="[qr_img ? '' : 'border-dash', 'ma-auto']"
				>
					<v-row
						v-if="!qr_img"
						class="fill-height ma-0"
						align="center"
						justify="center"
					>
						Select File
					</v-row>
				</v-img>
				{{result}}
			</v-col>
		</v-row>
		<v-row v-else>
			<qrcode-stream @decode="onDecode" />
		</v-row>
		<slot/>
	</v-container>
</template>
<script>
import { QrcodeStream, QrcodeCapture } from 'vue-qrcode-reader'
export default {
	components: {
		QrcodeStream,
		QrcodeCapture
	},
	props: ['setResult'],
	computed: {
		result: {
			get: function() {
				return this.$_result
			},
			set: function (value) {
				this.$_result = value
				this.setResult(value)
			}
		}
	},
	data () {
		return {
			$_result: '',
			mode: 0,
			qr_img: null
		}
	},
	methods: {
		async onDetect (promise) {
			this.qr_img = URL.createObjectURL(this.$refs.qrInput.$el.files[0])
			try {
				const {
					content,
				} = await promise
				this.result = content
			} catch (err) {

				this.result = ""
				console.log(err)
			}
		},
		selectFile() {
			this.$refs.qrInput.$el.click()
		},

		onDecode (data) {
			this.result = data
		}
	},
	mounted() {
	}
}
</script>

<style scoped>
	.no-overflow {
		overflow-wrap: anywhere;
	}
	.border-dash {
		border: 5px dashed #6b6b6b
	}
</style>