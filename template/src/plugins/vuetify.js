// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
        theme: {
          light: true,
          themes: {
            light: {
              primary: '#ff9800',
              secondary: '#00AA72'
            },
            dark: {
              primary: '#ff9800',
              secondary: '#00AA72'
            }
          },
          options: {
            customProperties: true
          }
        }
}

export default new Vuetify(opts)
