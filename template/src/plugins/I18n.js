import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    message: {}
  },
  es: {
    message: {}
  }
}
// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
},
{
  locale: 'es', // set locale
  messages, // set locale messages
}
)
