
<template>
  <v-card flat>
    <v-card-text>
      <v-stepper v-model="step" vertical>
        <v-stepper-step :complete="step > 1" step="1" editable>
          \{{ $t('step.one.title') }}
          <small>\{{ $t('step.one.description') }}</small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <one></one>
        </v-stepper-content>
        <v-stepper-step :complete="step > 2" step="2" editable>\{{ $t('step.two.title') }}</v-stepper-step>
      </v-stepper>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        color="primary"
        @click="previous()"
      >\{{ $t('step.buttons.previous') }}</v-btn>
      <v-btn
        :disabled="step === 2"
        color="primary"
        @click="next()"
      >\{{ $t('step.buttons.continue') }}</v-btn>
      <v-btn text>\{{ $t('step.buttons.cancel') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import one from "./steps/one.vue";

export default {
  //https://kazupon.github.io/vue-i18n/guide/component.html#component-based-localization
  i18n: {
    messages: {
      en: {
        step: {
          one: { title: "Select an app", description: "Summarize if needed" },
          buttons: {
            continue: "Continue",
            cancel: "Cancel"
          },
          two: { title: "Configure analytics for this app" },
          buttons: {
            previous: "Previous",
            continue: "Continue",
            cancel: "Cancel"
          }
        }
      },
      es: {
        step: {
          one: {
            title: "Selecciona una aplicación",
            description: "Resumir si es necesario"
          },
          buttons: {
            continue: "Continue",
            cancel: "Cancel"
          },
          two: { title: "Configura las analíticas para la aplicación" },
          buttons: {
            previous: "Anterior",
            continue: "Continua",
            cancel: "Cancela"
          }
        }
      }
    }
  },
  name: "{{ name }}",
  components: {
    one
  },
  data() {
    return {
      step: 1
    };
  },
  computed: {},
  watch: {},
  methods: {
    next() {
      this.step = this.step + 1;
    },
    previous() {
      this.step = this.step - 1;
    }
  }
};
</script>

<style scoped>
</style>

