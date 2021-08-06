import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				purple: {
					darken6: "#2A2B56"
				},
				secondary: "#F4F7FA"
			}
		}
	}
});
