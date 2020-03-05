import Vue from 'vue'
import vuetify from './plugins/vuetify.js' // path to vuetify export
import store from './plugins/store.js'; // path to vuex export
import {i18n} from './plugins/I18n.js'; // path to vuex export
import './plugins/jsonPath.js'

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  vuetify,
  store,
  i18n
})
